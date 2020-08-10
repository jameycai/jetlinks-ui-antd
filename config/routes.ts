export const routes = [
    {
        path: '/user',
        // component: '../layouts/UserLayout',
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './user/login2',
            },
        ],
    },
    {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
            {
                path: '/',
                component: '../layouts/BasicLayout',
                Routes: ['src/pages/Authorized'],
                routes: [
                    {
                        path: '/',
                        redirect: '/analysis',

                    },
                    {
                        name: '统计分析',
                        path: '/analysis',
                        icon: 'dashboard',
                        tenant: ['admin', 'member'],
                        iconfont: 'icon-tongjifenxi',
                        component: './analysis',
                    },
                    {
                        path: 'system',
                        name: '系统设置',
                        iconfont: 'icon-shezhi',
                        icon: 'setting',
                        tenant: ['admin'],
                        authority: ['user', 'role', 'permission', 'dictionary', 'admin'],
                        routes: [
                            {
                                path: '/system/user',
                                name: '用户管理',
                                iconfont: 'icon-yonghuguanli',
                                icon: 'user',
                                authority: ['user', 'admin'],
                                component: './system/users',
                            },
                            {
                                path: '/system/permission',
                                name: '权限管理',
                                icon: 'key',
                                iconfont: 'icon-quanxianguanli',
                                authority: ['permission', 'admin'],
                                component: './system/permission',
                            },
                            {
                                path: '/system/open-api',
                                name: 'OpenApi客户端',
                                icon: 'share-alt',
                                iconfont: 'icon-APIguanli',
                                authority: ['open-api', 'admin'],
                                version: 'pro',
                                component: './system/open-api',
                            },
                            {
                                path: '/system/org',
                                name: '机构管理',
                                icon: 'apartment',
                                iconfont: 'icon-jigoubianzhi',
                                authority: ['dimension', 'admin'],
                                component: './system/org',
                            },
                            {
                                path: '/system/role',
                                name: '角色管理',
                                icon: 'usergroup-add',
                                iconfont: 'icon-jiaoseguanli1',
                                authority: ['dimension', 'admin'],
                                component: './system/role',
                            },
                            {
                                path: '/system/config',
                                name: '系统配置',
                                icon: 'tool',
                                iconfont: 'icon-xitongpeizhi',
                                authority: ['system-config', 'admin'],
                                component: './system/config',
                            },
                            {
                                path: '/system/tenant',
                                name: '租户管理',
                                icon: 'team',
                                iconfont: 'icon-erji-zuhuguanli',
                                tenant: ['admin'],
                                authority: ['tenant-side-manager', 'tenant-manager', 'admin'],
                                version: 'pro',
                                component: './system/tenant'
                            },
                            {
                                hideInMenu: true,
                                path: '/system/tenant/detail/:id',
                                name: '租户详情',
                                tenant: ['admin'],
                                authority: ['tenant-side-manager', 'tenant-manager', 'admin'],
                                version: 'pro',
                                component: './system/tenant/detail',
                            },
                        ],
                    },
                    {
                        path: 'device',
                        name: '设备管理',
                        icon: 'box-plot',
                        tenant: ['admin', 'member'],
                        iconfont: 'icon-device-manage',
                        authority: ['device-product', 'device-instance', 'admin'],
                        routes: [
                            {
                                path: '/device/product',
                                name: '产品管理',
                                icon: 'laptop',
                                iconfont: 'icon-shebei',
                                tenant: ['admin', 'member'],
                                authority: ['device-product', 'admin'],
                                component: './device/product',
                            },
                            {
                                hideInMenu: true,
                                path: '/device/product/save/:id',
                                name: '产品详情',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-shebei',
                                // authority: ['device-product'],
                                component: './device/product/save/Detail',
                            },
                            {
                                hideInMenu: true,
                                path: '/device/product/add',
                                name: '新建产品',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-shebei',
                                // authority: ['device-product'],
                                component: './device/product/save/add/index.tsx',
                            },
                            {
                                path: '/device/instance',
                                name: '设备管理',
                                icon: 'desktop',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-shebei1',
                                authority: ['device-instance', 'admin'],
                                component: './device/instance',
                            },
                            {
                                hideInMenu: true,
                                path: '/device/instance/save/:id',
                                name: '设备详情',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-shebei1',
                                component: './device/instance/editor',
                            },
                            {
                                path: '/device/group',
                                name: '设备分组',
                                icon: 'gold',
                                tenant: ['admin', 'member'],
                                authority: ['device-group', 'admin'],
                                version: 'pro',
                                iconfont: 'icon-shebeifenzuguanli',
                                component: './device/group',
                            },
                            {
                                hideInMenu: true,
                                path: '/device/instance/add',
                                name: '添加设备',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-shebeifenzuguanli',
                                component: './device/instance/editor',
                            },
                            {
                                path: '/device/gateway',
                                name: '子设备管理',
                                icon: 'global',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-Group',
                                authority: ['device-gateway', 'admin'],
                                component: './device/gateway',
                            },
                            {
                                path: '/device/location',
                                name: '地理位置',
                                icon: 'compass',
                                tenant: ['admin'],
                                authority: ['geo-manager', 'admin'],
                                version: 'pro',
                                iconfont: 'icon-diliweizhi',
                                component: './device/location',
                            },
                            {
                                path: '/device/firmware',
                                name: '固件升级',
                                icon: 'cloud-sync',
                                tenant: ['admin'],
                                authority: ['firmware-manager', 'admin'],
                                version: 'pro',
                                iconfont: 'icon-gujianshengji',
                                component: './device/firmware',
                            },
                            {
                                hideInMenu: true,
                                tenant: ['admin'],
                                path: '/device/firmware/save/:id',
                                name: '固件详情',
                                iconfont: 'icon-gujianshengji',
                                component: './device/firmware/editor',
                            },
                        ],
                    },
                    {
                        path: 'network',
                        name: '设备接入',
                        iconfont: 'icon-shebei',
                        icon: 'login',
                        authority: ['certificate', 'network-config', 'device-gateway', 'protocol-supports', 'admin'],
                        routes: [
                            {
                                path: '/network/certificate',
                                name: '证书管理',
                                icon: 'book',
                                iconfont: 'icon-zhengshuguanli-',
                                authority: ['certificate', 'admin'],
                                component: './network/certificate',
                            },
                            {
                                path: '/network/protocol',
                                name: '协议管理',
                                icon: 'wallet',
                                iconfont: 'icon-xieyiguanli',
                                authority: ['protocol-supports', 'admin'],
                                component: './device/protocol',
                            },
                            {
                                path: '/network/type',
                                name: '网络组件',
                                icon: 'deployment-unit',
                                iconfont: 'icon-zujian',
                                authority: ['network-config', 'admin'],
                                component: './network/type',
                            },
                            {
                                path: '/network/gateway',
                                name: '设备网关',
                                icon: 'cloud-server',
                                iconfont: 'icon-shebei',
                                authority: ['device-gateway', 'admin'],
                                component: './network/gateway',
                            },
                        ],
                    },
                    {
                        path: 'notice',
                        name: '通知管理',
                        iconfont: 'icon-tongzhiguanli',
                        icon: 'message',
                        tenant: ['admin', 'member'],
                        authority: ['certificate', 'network-config', 'device-gateway', 'admin'],
                        routes: [
                            {
                                path: '/notice/config',
                                name: '通知配置',
                                icon: 'alert',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-SUI_tongzhipeizhi',
                                authority: ['notifier', 'admin'],
                                component: './notice/config',
                            },
                            {
                                path: '/notice/template',
                                name: '通知模版',
                                icon: 'bell',
                                tenant: ['admin', 'member'],
                                iconfont: 'icon-tongzhiguanli',
                                authority: ['template', 'admin'],
                                component: './notice/template',
                            },
                        ],
                    },
                    {
                        path: 'rule-engine',
                        name: '规则引擎',
                        icon: 'retweet',
                        iconfont: 'icon-guizeyinqing',
                        tenant: ['admin'],
                        authority: ['rule-model', 'rule-instance', 'sql-rule', 'admin'],
                        routes: [
                            {
                                path: '/rule-engine/model',
                                name: '规则模型',
                                icon: 'gateway',
                                tenant: ['admin'],
                                iconfont: 'icon-xian-buguize-moxing',
                                authority: ['rule-model', 'admin'],
                                version: 'pro',
                                component: './rule-engine/model',
                            },
                            {
                                path: '/rule-engine/instance',
                                name: '规则实例',
                                icon: 'block',
                                tenant: ['admin'],
                                iconfont: 'icon-hangweiguizeshili',
                                authority: ['rule-instance', 'admin'],
                                version: 'pro',
                                component: './rule-engine/instance',
                            },
                            {
                                path: '/rule-engine/sqlRule',
                                name: '数据转发',
                                icon: 'rise',
                                tenant: ['admin'],
                                iconfont: 'icon-datatransfer',
                                authority: ['rule-instance', 'admin'],
                                component: './rule-engine/sqlRule',
                            },
                            // {
                            //   path: '/rule-engine/email',
                            //   name: 'email',
                            //   icon: 'mail',
                            //   component: './rule-engine/email',
                            // },
                            // {
                            //   path: '/rule-engine/sms',
                            //   name: 'sms',
                            //   icon: 'message',
                            //   component: './rule-engine/sms',
                            // },
                        ],
                    },
                    {
                        path: 'logger',
                        name: '日志管理',
                        icon: 'calendar',
                        iconfont: 'icon-rizhiguanli',
                        authority: ['system-logger', 'access-logger', 'admin'],
                        routes: [
                            {
                                path: '/logger/access',
                                name: '访问日志',
                                icon: 'dash',
                                iconfont: 'icon-yonghufangwenrizhi',
                                authority: ['access-logger', 'admin'],
                                component: './logger/access',
                            },
                            {
                                path: '/logger/system',
                                name: '系统日志',
                                icon: 'ordered-list',
                                iconfont: 'icon-xitongrizhi',
                                authority: ['system-logger', 'admin'],
                                component: './logger/system',
                            },
                        ],
                    },
                    {
                        path: 'account',
                        name: '个人中心',
                        icon: 'user',
                        hideInMenu: true,
                        routes: [
                            // {
                            //   path: '/account/center',
                            //   name: '个人中心',
                            //   icon: 'smile',
                            //   component: './account/center'
                            // },
                            {
                                path: '/account/settings',
                                name: '个人设置',
                                icon: 'setting',
                                component: './account/settings'
                            },
                            {
                                path: '/account/notification',
                                name: '通知订阅',
                                icon: 'bell',
                                component: './account/notification'
                            }
                        ]
                    },
                    // {
                    //   name: 'paramter',
                    //   path: '/properties',
                    //   inco: 'bar-chart',
                    //   component: './script-demo',
                    // },
                    {
                        name: 'exception',
                        icon: 'smile',
                        path: '/exception',
                        hideInMenu: true,
                        routes: [
                            {
                                path: './500',
                                name: '500',
                                component: './exception/500',
                            },
                            {
                                path: './404',
                                name: '404',
                                component: './exception/404',
                            },
                            {
                                path: './403',
                                name: '403',
                                component: './exception/403',
                            },
                        ],
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
];
