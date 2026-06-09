import {
    permissionsRegistry,
    type PermissionGroupKey,
    type PermissionKey,
    type PermissionLevel,
} from './registry';

export type UserPermissionAccess =
    | string
    | {
    key: PermissionKey | string;
    access?: PermissionLevel | null;
};

export interface NormalizedUserPermission {
    key: PermissionKey | string;
    access: PermissionLevel;
}

const ACCESS_WEIGHT: Record<PermissionLevel, number> = {
    view: 1,
    edit: 2,
};

const permissionDefinitions = new Map(
    permissionsRegistry.map(permission => [permission.key, permission])
);

function toAccessLevel(value: unknown, fallback: PermissionLevel = "edit"): PermissionLevel {
    return value === "view" || value === "edit" ? value : fallback;
}

function normalizeStringPermission(permission: string): NormalizedUserPermission | null {
    const trimmed = permission.trim();

    if (!trimmed) return null;

    const [key, access] = trimmed.split(":");

    if (!key) return null;

    return {
        key,
        access: toAccessLevel(access),
    };
}

export function normalizeUserPermission(permission: unknown): NormalizedUserPermission | null {
    if (typeof permission === "string") {
        return normalizeStringPermission(permission);
    }

    if (!permission || typeof permission !== "object" || !("key" in permission)) {
        return null;
    }

    const key = String(permission.key).trim();

    if (!key) return null;

    return {
        key,
        access: toAccessLevel("access" in permission ? permission.access : undefined),
    };
}

export function normalizeUserPermissions(permissions: readonly unknown[]): NormalizedUserPermission[] {
    return permissions
        .map(normalizeUserPermission)
        .filter((permission): permission is NormalizedUserPermission => Boolean(permission));
}

export function hasPermission(
    permissions: readonly unknown[],
    key: PermissionKey | PermissionGroupKey,
    requiredAccess: PermissionLevel = "view",
): boolean {
    const definition = permissionDefinitions.get(key as PermissionKey);
    const normalized = normalizeUserPermissions(permissions);

    return normalized.some(permission => {
        const samePermission = permission.key === key;
        const sameGroup = definition ? permission.key === definition.groupKey : false;
        const wildcard = permission.key === "*";

        if (!samePermission && !sameGroup && !wildcard) return false;

        return ACCESS_WEIGHT[permission.access] >= ACCESS_WEIGHT[requiredAccess];
    });
}

export function hasAnyPermission(
    permissions: readonly unknown[],
    keys: readonly (PermissionKey | PermissionGroupKey)[],
    requiredAccess: PermissionLevel = "view",
): boolean {
    return keys.some(key => hasPermission(permissions, key, requiredAccess));
}

export function hasEveryPermission(
    permissions: readonly unknown[],
    keys: readonly (PermissionKey | PermissionGroupKey)[],
    requiredAccess: PermissionLevel = "view",
): boolean {
    return keys.every(key => hasPermission(permissions, key, requiredAccess));
}
