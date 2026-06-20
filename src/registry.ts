export type PermissionLevel = "view" | "edit";
export type PermissionAccessMode = "view" | "view_edit";

export interface PermissionGroupDefinition {
    key: string;
    nameUk: string;
    access: PermissionAccessMode;
}

export interface PermissionDefinition<GroupKey extends string = string> {
    key: string;
    groupKey: GroupKey;
    nameUk: string;
    access: PermissionAccessMode;
}

export type PermissionSection =
    | "global"
    | "distribution"
    | "technical"
    | "administration"
    | string;

export interface AccessPermission {
    key: PermissionKey | string;
    groupKey: PermissionGroupKey | string;
    nameUk: string;
    access: PermissionAccessMode;
    section: PermissionSection;
}

export interface AccessPermissionGroup {
    key: PermissionGroupKey | string;
    nameUk: string;
    access: PermissionAccessMode;
    section: PermissionSection;
}

export const permissionGroups = [
    {key: "global.search", nameUk: "Глобальний пошук", access: "view"},
    {key: "global.tasks", nameUk: "Завдання компанії", access: "view_edit"},
    {key: "global.clients", nameUk: "Клієнти", access: "view_edit"},
    {key: "global.addresses", nameUk: "Адреси та об'єкти адрес", access: "view_edit"},
    {key: "global.personal", nameUk: "Співробітники", access: "view_edit"},
    {key: "global.archive", nameUk: "Архів", access: "view_edit"},
    {key: "global.priceList", nameUk: "Прайс-лист", access: "view_edit"},
    {key: "global.platformSettings", nameUk: "Налаштування платформи", access: "view_edit"},

    {key: "distribution.access", nameUk: "Доступ до відділення розповсюдження", access: "view"},
    {key: "distribution.summary", nameUk: "Статистика відділення розповсюдження", access: "view"},
    {key: "distribution.conveyor", nameUk: "Конвеєр розповсюдження", access: "view_edit"},
    {key: "distribution.applications", nameUk: "Заявки розповсюдження", access: "view_edit"},
    {key: "distribution.applicationStages", nameUk: "Етапи заявки розповсюдження", access: "view_edit"},
    {key: "distribution.applicationSurvey", nameUk: "Опитувальний лист заявки", access: "view_edit"},
    {key: "distribution.applicationSystems", nameUk: "Системи в заявці", access: "view_edit"},
    {key: "distribution.boards", nameUk: "Об'єкти розповсюдження", access: "view_edit"},
    {key: "distribution.boardStages", nameUk: "Етапи об'єкта розповсюдження", access: "view_edit"},
    {key: "distribution.boardGroups", nameUk: "Групи об'єктів розповсюдження", access: "view_edit"},
    {key: "distribution.boardPause", nameUk: "Пауза об'єкта розповсюдження", access: "view_edit"},
    {key: "distribution.pipelineSettings", nameUk: "Налаштування конвеєра розповсюдження", access: "view_edit"},
    {key: "distribution.dictionaries", nameUk: "Довідники розповсюдження", access: "view_edit"},

    {key: "technical.access", nameUk: "Доступ до технічного відділення", access: "view"},
    {key: "technical.summary", nameUk: "Статистика технічного відділення", access: "view"},
    {key: "technical.conveyor", nameUk: "Конвеєр технічного відділення", access: "view_edit"},
    {key: "technical.applications", nameUk: "Технічні заявки", access: "view_edit"},
    {key: "technical.boards", nameUk: "Технічні об'єкти", access: "view_edit"},
    {key: "technical.boardStages", nameUk: "Етапи технічного об'єкта", access: "view_edit"},
    {key: "technical.montage", nameUk: "Монтаж об'єкта", access: "view_edit"},
    {key: "technical.supplies", nameUk: "Матеріали та забезпечення об'єкта", access: "view_edit"},
    {key: "technical.boardMasters", nameUk: "Майстри на об'єкті", access: "view_edit"},
    {key: "technical.boardPause", nameUk: "Пауза технічного об'єкта", access: "view_edit"},
    {key: "technical.brigades", nameUk: "Бригади", access: "view_edit"},
    {key: "technical.masters", nameUk: "Майстри", access: "view_edit"},
    {key: "technical.logistics", nameUk: "Логістика", access: "view_edit"},
    {key: "technical.acts", nameUk: "Секція актів", access: "view_edit"},
    {key: "technical.pipelineSettings", nameUk: "Налаштування технічного конвеєра", access: "view_edit"},
    {key: "technical.dictionaries", nameUk: "Довідники технічного відділення", access: "view_edit"},

    {key: "administration.posts", nameUk: "Посади компанії", access: "view_edit"},
    {key: "administration.permissions", nameUk: "Права доступу посад", access: "view_edit"},
    {key: "administration.globalDictionaries", nameUk: "Глобальні довідники", access: "view_edit"},
    {key: "administration.distributionDictionaries", nameUk: "Довідники відділення розповсюдження", access: "view_edit"},
    {key: "administration.technicalDictionaries", nameUk: "Довідники технічного відділення", access: "view_edit"},
] as const satisfies readonly PermissionGroupDefinition[];

export type PermissionGroupKey = typeof permissionGroups[number]["key"];

export const permissionsRegistry = [
    {key: "global.search.use", groupKey: "global.search", nameUk: "Використання глобального пошуку", access: "view"},

    {key: "tasks.list", groupKey: "global.tasks", nameUk: "Перегляд задач компанії", access: "view"},
    {key: "tasks.filter", groupKey: "global.tasks", nameUk: "Фільтрація задач", access: "view"},
    {key: "tasks.stageTasks.list", groupKey: "global.tasks", nameUk: "Перегляд задач з етапів", access: "view"},
    {key: "tasks.boardStages.list", groupKey: "global.tasks", nameUk: "Перегляд етапів об'єктів", access: "view"},
    {key: "tasks.bulkSelect", groupKey: "global.tasks", nameUk: "Вибір декількох задач", access: "view_edit"},
    {key: "tasks.redirect", groupKey: "global.tasks", nameUk: "Перенаправлення задач на іншого співробітника", access: "view_edit"},
    {key: "tasks.create", groupKey: "global.tasks", nameUk: "Створення задачі", access: "view_edit"},
    {key: "tasks.edit", groupKey: "global.tasks", nameUk: "Редагування задачі", access: "view_edit"},
    {key: "tasks.status.change", groupKey: "global.tasks", nameUk: "Зміна статусу задачі", access: "view_edit"},
    {key: "tasks.proof.manage", groupKey: "global.tasks", nameUk: "Підтвердження задачі текстом, вибором або файлом", access: "view_edit"},

    {key: "clients.list", groupKey: "global.clients", nameUk: "Перегляд списку клієнтів", access: "view"},
    {key: "clients.filter", groupKey: "global.clients", nameUk: "Фільтрація клієнтів", access: "view"},
    {key: "clients.profile", groupKey: "global.clients", nameUk: "Перегляд картки клієнта", access: "view"},
    {key: "clients.create", groupKey: "global.clients", nameUk: "Реєстрація клієнта", access: "view_edit"},
    {key: "clients.edit", groupKey: "global.clients", nameUk: "Редагування клієнта", access: "view_edit"},
    {key: "clients.addresses", groupKey: "global.clients", nameUk: "Перегляд адрес клієнта", access: "view"},
    {key: "clients.comments", groupKey: "global.clients", nameUk: "Коментарі до клієнта", access: "view_edit"},

    {key: "addresses.list", groupKey: "global.addresses", nameUk: "Перегляд списку адрес", access: "view"},
    {key: "addresses.filter", groupKey: "global.addresses", nameUk: "Фільтрація адрес", access: "view"},
    {key: "addresses.profile", groupKey: "global.addresses", nameUk: "Перегляд картки адреси", access: "view"},
    {key: "addresses.create", groupKey: "global.addresses", nameUk: "Створення адреси", access: "view_edit"},
    {key: "addresses.edit", groupKey: "global.addresses", nameUk: "Редагування адреси", access: "view_edit"},
    {key: "addresses.map.open", groupKey: "global.addresses", nameUk: "Відкриття адреси на карті", access: "view"},
    {key: "addresses.objects.list", groupKey: "global.addresses", nameUk: "Перегляд об'єктів за адресою", access: "view"},
    {key: "addresses.objects.stage", groupKey: "global.addresses", nameUk: "Перегляд відділення та етапу об'єкта за адресою", access: "view"},
    {key: "addresses.summary", groupKey: "global.addresses", nameUk: "Зведення по адресах", access: "view"},

    {key: "personal.list", groupKey: "global.personal", nameUk: "Перегляд списку співробітників", access: "view"},
    {key: "personal.profile", groupKey: "global.personal", nameUk: "Перегляд картки співробітника", access: "view"},
    {key: "personal.invite", groupKey: "global.personal", nameUk: "Запрошення співробітника", access: "view_edit"},
    {key: "personal.edit", groupKey: "global.personal", nameUk: "Редагування даних співробітника", access: "view_edit"},
    {key: "personal.dismiss", groupKey: "global.personal", nameUk: "Звільнення співробітника", access: "view_edit"},
    {key: "personal.restore", groupKey: "global.personal", nameUk: "Повернення співробітника в штат", access: "view_edit"},

    {key: "archive.list", groupKey: "global.archive", nameUk: "Перегляд архівних заявок і об'єктів", access: "view"},
    {key: "archive.filter", groupKey: "global.archive", nameUk: "Фільтрація архіву", access: "view"},
    {key: "archive.status.view", groupKey: "global.archive", nameUk: "Перегляд статусу архіву", access: "view"},
    {key: "archive.entityType.view", groupKey: "global.archive", nameUk: "Перегляд типу архівної сутності", access: "view"},
    {key: "archive.send", groupKey: "global.archive", nameUk: "Відправлення сутності в архів", access: "view_edit"},

    {key: "priceList.view", groupKey: "global.priceList", nameUk: "Перегляд прайс-листа", access: "view"},
    {key: "priceList.edit", groupKey: "global.priceList", nameUk: "Редагування таблиці цін", access: "view_edit"},
    {key: "priceList.save", groupKey: "global.priceList", nameUk: "Збереження прайс-листа", access: "view_edit"},
    {key: "priceList.history", groupKey: "global.priceList", nameUk: "Перегляд історії прайс-листа", access: "view"},
    {key: "priceList.printVersion", groupKey: "global.priceList", nameUk: "Формування версії для друку", access: "view"},
    {key: "priceList.pdf", groupKey: "global.priceList", nameUk: "Завантаження або друк PDF", access: "view"},
    {key: "priceList.settings", groupKey: "global.priceList", nameUk: "Налаштування колонок і систем", access: "view_edit"},

    {key: "platformSettings.view", groupKey: "global.platformSettings", nameUk: "Перегляд налаштувань платформи", access: "view"},
    {key: "platformSettings.restoreRemoved", groupKey: "global.platformSettings", nameUk: "Відновлення видалених довідникових значень", access: "view_edit"},

    {key: "distribution.access.view", groupKey: "distribution.access", nameUk: "Доступ до відділення розповсюдження", access: "view"},
    {key: "distribution.summary.view", groupKey: "distribution.summary", nameUk: "Перегляд зведених показників", access: "view"},
    {key: "distribution.summary.filter", groupKey: "distribution.summary", nameUk: "Фільтрація статистики", access: "view"},
    {key: "distribution.summary.details", groupKey: "distribution.summary", nameUk: "Перегляд деталізації показників", access: "view"},
    {key: "distribution.summary.newApplications", groupKey: "distribution.summary", nameUk: "Показник нових заявок", access: "view"},
    {key: "distribution.summary.newSystems", groupKey: "distribution.summary", nameUk: "Показник нових систем", access: "view"},
    {key: "distribution.summary.workSystems", groupKey: "distribution.summary", nameUk: "Показник систем у роботі", access: "view"},
    {key: "distribution.summary.winProbability", groupKey: "distribution.summary", nameUk: "Показник вірогідності виграшу", access: "view"},
    {key: "distribution.summary.wonSystems", groupKey: "distribution.summary", nameUk: "Показник виграних систем", access: "view"},

    {key: "distribution.conveyor.view", groupKey: "distribution.conveyor", nameUk: "Перегляд конвеєра", access: "view"},
    {key: "distribution.conveyor.filter", groupKey: "distribution.conveyor", nameUk: "Фільтрація конвеєра", access: "view"},
    {key: "distribution.conveyor.fullscreen", groupKey: "distribution.conveyor", nameUk: "Повноекранний перегляд колонок", access: "view"},
    {key: "distribution.conveyor.applications", groupKey: "distribution.conveyor", nameUk: "Перегляд заявок у конвеєрі", access: "view"},
    {key: "distribution.conveyor.boards", groupKey: "distribution.conveyor", nameUk: "Перегляд об'єктів у конвеєрі", access: "view"},
    {key: "distribution.conveyor.openApplication", groupKey: "distribution.conveyor", nameUk: "Відкриття картки заявки", access: "view"},
    {key: "distribution.conveyor.openBoard", groupKey: "distribution.conveyor", nameUk: "Відкриття картки об'єкта", access: "view"},

    {key: "distribution.applications.list", groupKey: "distribution.applications", nameUk: "Перегляд списку заявок", access: "view"},
    {key: "distribution.applications.create", groupKey: "distribution.applications", nameUk: "Створення заявки", access: "view_edit"},
    {key: "distribution.applications.edit", groupKey: "distribution.applications", nameUk: "Редагування заявки", access: "view_edit"},
    {key: "distribution.applications.manager.assign", groupKey: "distribution.applications", nameUk: "Призначення менеджера заявки", access: "view_edit"},
    {key: "distribution.applications.manager.me", groupKey: "distribution.applications", nameUk: "Стати менеджером заявки", access: "view_edit"},
    {key: "distribution.applications.client.find", groupKey: "distribution.applications", nameUk: "Пошук і прив'язка клієнта", access: "view_edit"},
    {key: "distribution.applications.client.update", groupKey: "distribution.applications", nameUk: "Оновлення клієнта в заявці", access: "view_edit"},
    {key: "distribution.applications.address.update", groupKey: "distribution.applications", nameUk: "Оновлення адреси заявки", access: "view_edit"},
    {key: "distribution.applications.archive", groupKey: "distribution.applications", nameUk: "Архівування заявки", access: "view_edit"},
    {key: "distribution.applications.files", groupKey: "distribution.applications", nameUk: "Файли заявки", access: "view_edit"},
    {key: "distribution.applications.history", groupKey: "distribution.applications", nameUk: "Журнал дій заявки", access: "view"},

    {key: "distribution.applicationStages.view", groupKey: "distribution.applicationStages", nameUk: "Перегляд етапів заявки", access: "view"},
    {key: "distribution.applicationStages.next", groupKey: "distribution.applicationStages", nameUk: "Перехід на наступний етап", access: "view_edit"},
    {key: "distribution.applicationStages.back", groupKey: "distribution.applicationStages", nameUk: "Повернення на попередній етап", access: "view_edit"},
    {key: "distribution.applicationStages.edit", groupKey: "distribution.applicationStages", nameUk: "Редагування даних етапу", access: "view_edit"},
    {key: "distribution.applicationStages.liable.assign", groupKey: "distribution.applicationStages", nameUk: "Заповнення відповідального за етап", access: "view_edit"},
    {key: "distribution.applicationStages.status.change", groupKey: "distribution.applicationStages", nameUk: "Зміна статусу етапу", access: "view_edit"},

    {key: "distribution.applicationSurvey.view", groupKey: "distribution.applicationSurvey", nameUk: "Перегляд опитувального листа", access: "view"},
    {key: "distribution.applicationSurvey.edit", groupKey: "distribution.applicationSurvey", nameUk: "Редагування опитувального листа", access: "view_edit"},
    {key: "distribution.applicationSurvey.save", groupKey: "distribution.applicationSurvey", nameUk: "Збереження опитувального листа", access: "view_edit"},
    {key: "distribution.applicationSurvey.history", groupKey: "distribution.applicationSurvey", nameUk: "Історія змін опитувального листа", access: "view"},

    {key: "distribution.applicationSystems.list", groupKey: "distribution.applicationSystems", nameUk: "Перегляд систем у заявці", access: "view"},
    {key: "distribution.applicationSystems.create", groupKey: "distribution.applicationSystems", nameUk: "Додавання системи", access: "view_edit"},
    {key: "distribution.applicationSystems.edit", groupKey: "distribution.applicationSystems", nameUk: "Редагування системи", access: "view_edit"},
    {key: "distribution.applicationSystems.duplicate", groupKey: "distribution.applicationSystems", nameUk: "Дублювання системи", access: "view_edit"},
    {key: "distribution.applicationSystems.remove", groupKey: "distribution.applicationSystems", nameUk: "Видалення системи", access: "view_edit"},
    {key: "distribution.applicationSystems.paymentType", groupKey: "distribution.applicationSystems", nameUk: "Вибір типу оплати", access: "view_edit"},
    {key: "distribution.applicationSystems.values", groupKey: "distribution.applicationSystems", nameUk: "Заповнення кількості та параметрів системи", access: "view_edit"},
    {key: "distribution.applicationSystems.board.create", groupKey: "distribution.applicationSystems", nameUk: "Створення об'єкта із системи", access: "view_edit"},
    {key: "distribution.applicationSystems.board.finalize", groupKey: "distribution.applicationSystems", nameUk: "Фінальна передача системи в об'єкт", access: "view_edit"},

    {key: "distribution.boards.list", groupKey: "distribution.boards", nameUk: "Перегляд об'єктів у конвеєрі", access: "view"},
    {key: "distribution.boards.edit", groupKey: "distribution.boards", nameUk: "Редагування об'єкта", access: "view_edit"},
    {key: "distribution.boards.client.assign", groupKey: "distribution.boards", nameUk: "Призначення клієнта об'єкта", access: "view_edit"},
    {key: "distribution.boards.manager.assign", groupKey: "distribution.boards", nameUk: "Призначення відповідального або менеджера", access: "view_edit"},
    {key: "distribution.boards.summary", groupKey: "distribution.boards", nameUk: "Перегляд зведення об'єкта", access: "view"},
    {key: "distribution.boards.files", groupKey: "distribution.boards", nameUk: "Файли об'єкта", access: "view_edit"},
    {key: "distribution.boards.history", groupKey: "distribution.boards", nameUk: "Журнал дій об'єкта", access: "view"},
    {key: "distribution.boards.archive", groupKey: "distribution.boards", nameUk: "Відправлення об'єкта в архів", access: "view_edit"},

    {key: "distribution.boardStages.view", groupKey: "distribution.boardStages", nameUk: "Перегляд етапів об'єкта", access: "view"},
    {key: "distribution.boardStages.edit", groupKey: "distribution.boardStages", nameUk: "Редагування етапу", access: "view_edit"},
    {key: "distribution.boardStages.postpone", groupKey: "distribution.boardStages", nameUk: "Перенесення строку етапу", access: "view_edit"},
    {key: "distribution.boardStages.next", groupKey: "distribution.boardStages", nameUk: "Перехід на наступний етап", access: "view_edit"},
    {key: "distribution.boardStages.back", groupKey: "distribution.boardStages", nameUk: "Повернення на попередній етап", access: "view_edit"},
    {key: "distribution.boardStages.status.change", groupKey: "distribution.boardStages", nameUk: "Зміна статусу етапу", access: "view_edit"},
    {key: "distribution.boardStages.toTechnical", groupKey: "distribution.boardStages", nameUk: "Передача об'єкта в технічне відділення", access: "view_edit"},

    {key: "distribution.boardGroups.view", groupKey: "distribution.boardGroups", nameUk: "Перегляд групи об'єктів", access: "view"},
    {key: "distribution.boardGroups.grouping", groupKey: "distribution.boardGroups", nameUk: "Об'єднання об'єктів у групу", access: "view_edit"},
    {key: "distribution.boardGroups.ungrouping", groupKey: "distribution.boardGroups", nameUk: "Розгрупування об'єктів", access: "view_edit"},
    {key: "distribution.boardGroups.name.edit", groupKey: "distribution.boardGroups", nameUk: "Редагування назви групи", access: "view_edit"},
    {key: "distribution.boardGroups.manager.assign", groupKey: "distribution.boardGroups", nameUk: "Призначення менеджера групи", access: "view_edit"},
    {key: "distribution.boardGroups.comments", groupKey: "distribution.boardGroups", nameUk: "Коментарі групи", access: "view_edit"},
    {key: "distribution.boardGroups.files", groupKey: "distribution.boardGroups", nameUk: "Файли групи", access: "view_edit"},
    {key: "distribution.boardGroups.archive", groupKey: "distribution.boardGroups", nameUk: "Архівування об'єктів групи", access: "view_edit"},
    {key: "distribution.boardGroups.stages.manage", groupKey: "distribution.boardGroups", nameUk: "Керування етапами групи", access: "view_edit"},
    {key: "distribution.boardGroups.pause.create", groupKey: "distribution.boardGroups", nameUk: "Постановка групи на паузу", access: "view_edit"},
    {key: "distribution.boardGroups.pause.reason", groupKey: "distribution.boardGroups", nameUk: "Вказання причини та дати паузи групи", access: "view_edit"},
    {key: "distribution.boardGroups.pause.remove", groupKey: "distribution.boardGroups", nameUk: "Зняття групи з паузи", access: "view_edit"},

    {key: "distribution.boardPause.create", groupKey: "distribution.boardPause", nameUk: "Постановка об'єкта на паузу", access: "view_edit"},
    {key: "distribution.boardPause.reason", groupKey: "distribution.boardPause", nameUk: "Вказання причини та дати паузи", access: "view_edit"},
    {key: "distribution.boardPause.remove", groupKey: "distribution.boardPause", nameUk: "Зняття об'єкта з паузи", access: "view_edit"},

    {key: "distribution.pipelineSettings.applications", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування конвеєра заявок", access: "view_edit"},
    {key: "distribution.pipelineSettings.boards", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування конвеєра об'єктів", access: "view_edit"},
    {key: "distribution.pipelineSettings.stages", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування етапів", access: "view_edit"},
    {key: "distribution.pipelineSettings.dates", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування дат етапів", access: "view_edit"},
    {key: "distribution.pipelineSettings.members", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування учасників етапу", access: "view_edit"},
    {key: "distribution.pipelineSettings.checks", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування обов'язкових перевірок", access: "view_edit"},
    {key: "distribution.pipelineSettings.defaultTasks", groupKey: "distribution.pipelineSettings", nameUk: "Налаштування задач за замовчуванням", access: "view_edit"},

    {key: "distribution.dictionaries.surveyList", groupKey: "distribution.dictionaries", nameUk: "Опитувальний лист", access: "view_edit"},
    {key: "distribution.dictionaries.channels", groupKey: "distribution.dictionaries", nameUk: "Канали заявок", access: "view_edit"},
    {key: "distribution.dictionaries.paymentTypes", groupKey: "distribution.dictionaries", nameUk: "Типи оплат для систем", access: "view_edit"},
    {key: "distribution.dictionaries.priorities", groupKey: "distribution.dictionaries", nameUk: "Пріоритети", access: "view_edit"},

    {key: "technical.access.view", groupKey: "technical.access", nameUk: "Доступ до технічного відділення", access: "view"},
    {key: "technical.summary.view", groupKey: "technical.summary", nameUk: "Перегляд зведених показників", access: "view"},
    {key: "technical.summary.filter", groupKey: "technical.summary", nameUk: "Фільтрація статистики", access: "view"},
    {key: "technical.summary.total", groupKey: "technical.summary", nameUk: "Загальна статистика об'єктів", access: "view"},
    {key: "technical.summary.notPlanned", groupKey: "technical.summary", nameUk: "Незаплановані об'єкти", access: "view"},
    {key: "technical.summary.planned", groupKey: "technical.summary", nameUk: "Заплановані об'єкти", access: "view"},
    {key: "technical.summary.paused", groupKey: "technical.summary", nameUk: "Об'єкти на паузі", access: "view"},
    {key: "technical.summary.completedConveyor", groupKey: "technical.summary", nameUk: "Виконані об'єкти в конвеєрі", access: "view"},
    {key: "technical.summary.completedArchive", groupKey: "technical.summary", nameUk: "Виконані об'єкти в архіві", access: "view"},
    {key: "technical.summary.lostArchive", groupKey: "technical.summary", nameUk: "Втрачені об'єкти в архіві", access: "view"},
    {key: "technical.summary.amounts", groupKey: "technical.summary", nameUk: "Суми робіт і матеріалів", access: "view"},

    {key: "technical.conveyor.view", groupKey: "technical.conveyor", nameUk: "Перегляд конвеєра", access: "view"},
    {key: "technical.conveyor.filter", groupKey: "technical.conveyor", nameUk: "Фільтрація конвеєра", access: "view"},
    {key: "technical.conveyor.fullscreen", groupKey: "technical.conveyor", nameUk: "Повноекранний перегляд колонок", access: "view"},
    {key: "technical.conveyor.applications", groupKey: "technical.conveyor", nameUk: "Перегляд технічних заявок", access: "view"},
    {key: "technical.conveyor.boards", groupKey: "technical.conveyor", nameUk: "Перегляд технічних об'єктів", access: "view"},
    {key: "technical.conveyor.openApplication", groupKey: "technical.conveyor", nameUk: "Відкриття картки технічної заявки", access: "view"},
    {key: "technical.conveyor.openBoard", groupKey: "technical.conveyor", nameUk: "Відкриття картки технічного об'єкта", access: "view"},

    {key: "technical.applications.list", groupKey: "technical.applications", nameUk: "Перегляд списку заявок", access: "view"},
    {key: "technical.applications.profile", groupKey: "technical.applications", nameUk: "Перегляд картки заявки", access: "view"},
    {key: "technical.applications.board.create", groupKey: "technical.applications", nameUk: "Створення технічного об'єкта із заявки", access: "view_edit"},
    {key: "technical.applications.next", groupKey: "technical.applications", nameUk: "Перехід заявки далі", access: "view_edit"},
    {key: "technical.applications.return", groupKey: "technical.applications", nameUk: "Повернення заявки", access: "view_edit"},
    {key: "technical.applications.edit", groupKey: "technical.applications", nameUk: "Редагування даних заявки", access: "view_edit"},

    {key: "technical.boards.list", groupKey: "technical.boards", nameUk: "Перегляд об'єктів", access: "view"},
    {key: "technical.boards.edit", groupKey: "technical.boards", nameUk: "Редагування об'єкта", access: "view_edit"},
    {key: "technical.boards.summary", groupKey: "technical.boards", nameUk: "Перегляд зведення об'єкта", access: "view"},
    {key: "technical.boards.files", groupKey: "technical.boards", nameUk: "Файли об'єкта", access: "view_edit"},
    {key: "technical.boards.history", groupKey: "technical.boards", nameUk: "Журнал дій об'єкта", access: "view"},
    {key: "technical.boards.archive", groupKey: "technical.boards", nameUk: "Відправлення об'єкта в архів", access: "view_edit"},
    {key: "technical.boards.checklist.view", groupKey: "technical.boards", nameUk: "Перегляд чек-листа об'єкта", access: "view"},
    {key: "technical.boards.checklist.edit", groupKey: "technical.boards", nameUk: "Редагування чек-листа об'єкта", access: "view_edit"},
    {key: "technical.boards.logistics", groupKey: "technical.boards", nameUk: "Перегляд логістики об'єкта", access: "view"},

    {key: "technical.boardStages.view", groupKey: "technical.boardStages", nameUk: "Перегляд етапів об'єкта", access: "view"},
    {key: "technical.boardStages.edit", groupKey: "technical.boardStages", nameUk: "Редагування етапу", access: "view_edit"},
    {key: "technical.boardStages.postpone", groupKey: "technical.boardStages", nameUk: "Перенесення строку етапу", access: "view_edit"},
    {key: "technical.boardStages.next", groupKey: "technical.boardStages", nameUk: "Перехід на наступний етап", access: "view_edit"},
    {key: "technical.boardStages.back", groupKey: "technical.boardStages", nameUk: "Повернення на попередній етап", access: "view_edit"},
    {key: "technical.boardStages.status.change", groupKey: "technical.boardStages", nameUk: "Зміна статусу етапу", access: "view_edit"},
    {key: "technical.boardStages.liable.assign", groupKey: "technical.boardStages", nameUk: "Призначення відповідальних", access: "view_edit"},

    {key: "technical.montage.list", groupKey: "technical.montage", nameUk: "Перегляд монтажних пунктів", access: "view"},
    {key: "technical.montage.create", groupKey: "technical.montage", nameUk: "Додавання монтажного пункту", access: "view_edit"},
    {key: "technical.montage.edit", groupKey: "technical.montage", nameUk: "Редагування монтажного пункту", access: "view_edit"},
    {key: "technical.montage.remove", groupKey: "technical.montage", nameUk: "Видалення монтажного пункту", access: "view_edit"},
    {key: "technical.montage.progress", groupKey: "technical.montage", nameUk: "Облік відсотка виконання монтажу", access: "view_edit"},

    {key: "technical.supplies.list", groupKey: "technical.supplies", nameUk: "Перегляд матеріалів", access: "view"},
    {key: "technical.supplies.create", groupKey: "technical.supplies", nameUk: "Додавання матеріалу", access: "view_edit"},
    {key: "technical.supplies.edit", groupKey: "technical.supplies", nameUk: "Редагування матеріалу", access: "view_edit"},
    {key: "technical.supplies.remove", groupKey: "technical.supplies", nameUk: "Видалення матеріалу", access: "view_edit"},
    {key: "technical.supplies.amounts", groupKey: "technical.supplies", nameUk: "Облік суми матеріалів", access: "view_edit"},

    {key: "technical.boardMasters.list", groupKey: "technical.boardMasters", nameUk: "Перегляд призначених майстрів", access: "view"},
    {key: "technical.boardMasters.add", groupKey: "technical.boardMasters", nameUk: "Додавання майстра на об'єкт", access: "view_edit"},
    {key: "technical.boardMasters.remove", groupKey: "technical.boardMasters", nameUk: "Видалення майстра з об'єкта", access: "view_edit"},

    {key: "technical.boardPause.create", groupKey: "technical.boardPause", nameUk: "Постановка об'єкта на паузу", access: "view_edit"},
    {key: "technical.boardPause.reason", groupKey: "technical.boardPause", nameUk: "Вказання причини та дати паузи", access: "view_edit"},
    {key: "technical.boardPause.remove", groupKey: "technical.boardPause", nameUk: "Зняття об'єкта з паузи", access: "view_edit"},

    {key: "technical.brigades.list", groupKey: "technical.brigades", nameUk: "Перегляд списку бригад", access: "view"},
    {key: "technical.brigades.profile", groupKey: "technical.brigades", nameUk: "Перегляд картки бригади", access: "view"},
    {key: "technical.brigades.create", groupKey: "technical.brigades", nameUk: "Створення бригади", access: "view_edit"},
    {key: "technical.brigades.edit", groupKey: "technical.brigades", nameUk: "Редагування бригади", access: "view_edit"},
    {key: "technical.brigades.foreman.assign", groupKey: "technical.brigades", nameUk: "Призначення бригадира", access: "view_edit"},
    {key: "technical.brigades.members", groupKey: "technical.brigades", nameUk: "Перегляд складу бригади", access: "view"},
    {key: "technical.brigades.disband", groupKey: "technical.brigades", nameUk: "Розформування бригади", access: "view_edit"},
    {key: "technical.brigades.restore", groupKey: "technical.brigades", nameUk: "Відновлення бригади", access: "view_edit"},

    {key: "technical.masters.list", groupKey: "technical.masters", nameUk: "Перегляд списку майстрів", access: "view"},
    {key: "technical.masters.profile", groupKey: "technical.masters", nameUk: "Перегляд картки майстра", access: "view"},
    {key: "technical.masters.create", groupKey: "technical.masters", nameUk: "Створення майстра", access: "view_edit"},
    {key: "technical.masters.edit", groupKey: "technical.masters", nameUk: "Редагування майстра", access: "view_edit"},
    {key: "technical.masters.avatar", groupKey: "technical.masters", nameUk: "Завантаження або зміна аватара майстра", access: "view_edit"},
    {key: "technical.masters.dismiss", groupKey: "technical.masters", nameUk: "Звільнення майстра", access: "view_edit"},
    {key: "technical.masters.restore", groupKey: "technical.masters", nameUk: "Відновлення майстра", access: "view_edit"},

    {key: "technical.logistics.list", groupKey: "technical.logistics", nameUk: "Перегляд списку логістики", access: "view"},
    {key: "technical.logistics.create", groupKey: "technical.logistics", nameUk: "Створення логістичної заявки", access: "view_edit"},
    {key: "technical.logistics.profile", groupKey: "technical.logistics", nameUk: "Перегляд логістичної заявки", access: "view"},
    {key: "technical.logistics.edit", groupKey: "technical.logistics", nameUk: "Редагування логістичної заявки", access: "view_edit"},
    {key: "technical.logistics.copy", groupKey: "technical.logistics", nameUk: "Копіювання даних логістики", access: "view"},
    {key: "technical.logistics.board.link", groupKey: "technical.logistics", nameUk: "Прив'язка логістики до об'єкта", access: "view_edit"},

    {key: "technical.acts.list", groupKey: "technical.acts", nameUk: "Перегляд списку актів", access: "view"},
    {key: "technical.acts.filter", groupKey: "technical.acts", nameUk: "Фільтрація актів", access: "view"},
    {key: "technical.acts.profile", groupKey: "technical.acts", nameUk: "Перегляд акта", access: "view"},
    {key: "technical.acts.edit", groupKey: "technical.acts", nameUk: "Редагування акта", access: "view_edit"},
    {key: "technical.acts.status.change", groupKey: "technical.acts", nameUk: "Зміна статусу акта", access: "view_edit"},
    {key: "technical.acts.reject", groupKey: "technical.acts", nameUk: "Відхилення акта", access: "view_edit"},
    {key: "technical.acts.completeStages", groupKey: "technical.acts", nameUk: "Завершення етапів по акту", access: "view_edit"},
    {key: "technical.acts.works.list", groupKey: "technical.acts", nameUk: "Перегляд робіт в акті", access: "view"},
    {key: "technical.acts.works.create", groupKey: "technical.acts", nameUk: "Додавання роботи", access: "view_edit"},
    {key: "technical.acts.works.edit", groupKey: "technical.acts", nameUk: "Редагування роботи", access: "view_edit"},
    {key: "technical.acts.works.remove", groupKey: "technical.acts", nameUk: "Видалення роботи", access: "view_edit"},
    {key: "technical.acts.prices", groupKey: "technical.acts", nameUk: "Перегляд цін для актів", access: "view"},
    {key: "technical.acts.pdf", groupKey: "technical.acts", nameUk: "Формування PDF акта", access: "view"},
    {key: "technical.acts.print", groupKey: "technical.acts", nameUk: "Друк акта", access: "view"},
    {key: "technical.acts.download", groupKey: "technical.acts", nameUk: "Завантаження акта", access: "view"},

    {key: "technical.pipelineSettings.board", groupKey: "technical.pipelineSettings", nameUk: "Налаштування конвеєра", access: "view_edit"},
    {key: "technical.pipelineSettings.stages", groupKey: "technical.pipelineSettings", nameUk: "Налаштування етапів", access: "view_edit"},
    {key: "technical.pipelineSettings.dates", groupKey: "technical.pipelineSettings", nameUk: "Налаштування дат етапів", access: "view_edit"},
    {key: "technical.pipelineSettings.members", groupKey: "technical.pipelineSettings", nameUk: "Налаштування учасників етапу", access: "view_edit"},
    {key: "technical.pipelineSettings.checks", groupKey: "technical.pipelineSettings", nameUk: "Налаштування обов'язкових перевірок", access: "view_edit"},
    {key: "technical.pipelineSettings.defaultTasks", groupKey: "technical.pipelineSettings", nameUk: "Налаштування задач за замовчуванням", access: "view_edit"},
    {key: "technical.pipelineSettings.standardTasks", groupKey: "technical.pipelineSettings", nameUk: "Налаштування стандартних задач", access: "view_edit"},

    {key: "technical.dictionaries.checkList", groupKey: "technical.dictionaries", nameUk: "Чек-лист", access: "view_edit"},
    {key: "technical.dictionaries.masterRoles", groupKey: "technical.dictionaries", nameUk: "Посади майстрів", access: "view_edit"},
    {key: "technical.dictionaries.standardTasks", groupKey: "technical.dictionaries", nameUk: "Стандартні задачі технічного конвеєра", access: "view_edit"},

    {key: "administration.posts.list", groupKey: "administration.posts", nameUk: "Перегляд списку посад", access: "view"},
    {key: "administration.posts.create", groupKey: "administration.posts", nameUk: "Створення посади", access: "view_edit"},
    {key: "administration.posts.edit", groupKey: "administration.posts", nameUk: "Редагування посади", access: "view_edit"},
    {key: "administration.posts.remove", groupKey: "administration.posts", nameUk: "Видалення або відновлення посади", access: "view_edit"},

    {key: "administration.permissions.tree", groupKey: "administration.permissions", nameUk: "Перегляд дерева прав", access: "view"},
    {key: "administration.permissions.assignView", groupKey: "administration.permissions", nameUk: "Призначення доступу на перегляд", access: "view_edit"},
    {key: "administration.permissions.assignEdit", groupKey: "administration.permissions", nameUk: "Призначення доступу на редагування", access: "view_edit"},
    {key: "administration.permissions.remove", groupKey: "administration.permissions", nameUk: "Зняття доступу", access: "view_edit"},
    {key: "administration.permissions.distribution", groupKey: "administration.permissions", nameUk: "Права по відділенню розповсюдження", access: "view_edit"},
    {key: "administration.permissions.technical", groupKey: "administration.permissions", nameUk: "Права по технічному відділенню", access: "view_edit"},
    {key: "administration.permissions.price", groupKey: "administration.permissions", nameUk: "Права на прайс-лист і системи", access: "view_edit"},
    {key: "administration.permissions.acts", groupKey: "administration.permissions", nameUk: "Права на секцію актів", access: "view_edit"},

    {key: "administration.globalDictionaries.addressTypes", groupKey: "administration.globalDictionaries", nameUk: "Типи об'єктів і адрес", access: "view_edit"},
    {key: "administration.globalDictionaries.systems", groupKey: "administration.globalDictionaries", nameUk: "Системи інженерії", access: "view_edit"},
    {key: "administration.globalDictionaries.priceList", groupKey: "administration.globalDictionaries", nameUk: "Прайс-лист", access: "view_edit"},

    {key: "administration.distributionDictionaries.surveyList", groupKey: "administration.distributionDictionaries", nameUk: "Опитувальний лист", access: "view_edit"},
    {key: "administration.distributionDictionaries.channels", groupKey: "administration.distributionDictionaries", nameUk: "Канали заявок", access: "view_edit"},

    {key: "administration.technicalDictionaries.ch  eckList", groupKey: "administration.technicalDictionaries", nameUk: "Чек-лист", access: "view_edit"},
    {key: "administration.technicalDictionaries.masterRoles", groupKey: "administration.technicalDictionaries", nameUk: "Посади майстрів", access: "view_edit"},
] as const satisfies readonly PermissionDefinition<PermissionGroupKey>[];

export type PermissionKey = typeof permissionsRegistry[number]["key"];

export const permissionLabelsUk = Object.fromEntries(
    permissionsRegistry.map(permission => [permission.key, permission.nameUk])
) as Record<PermissionKey, string>;

export const permissionGroupLabelsUk = Object.fromEntries(
    permissionGroups.map(group => [group.key, group.nameUk])
) as Record<PermissionGroupKey, string>;

function getPermissionSection(key: string): PermissionSection {
    return key.split(".")[0] || "global";
}

export const accessPermissionGroups = permissionGroups.map(group => ({
    ...group,
    section: getPermissionSection(group.key),
})) as readonly AccessPermissionGroup[];

export const accessPermissions = permissionsRegistry.map(permission => ({
    ...permission,
    section: getPermissionSection(permission.groupKey),
})) as readonly AccessPermission[];

export const accessRegistryBySection = accessPermissionGroups.reduce((acc, group) => {
    if (!acc[group.section]) {
        acc[group.section] = {groups: [], permissions: []};
    }

    acc[group.section].groups.push(group);
    return acc;
}, {} as Record<PermissionSection, {groups: AccessPermissionGroup[]; permissions: AccessPermission[]}>);

for (const permission of accessPermissions) {
    if (!accessRegistryBySection[permission.section]) {
        accessRegistryBySection[permission.section] = {groups: [], permissions: []};
    }

    accessRegistryBySection[permission.section].permissions.push(permission);
}
