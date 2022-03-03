export type IMenuItem = {
  i18n: string;
  href: string;
};

export const menuList: IMenuItem[] = [
  {
    i18n: 'home',
    href: '/'
  },
  {
    i18n: 'feature',
    href: '/feature'
  },
  {
    i18n: 'agent',
    href: '/agent'
  },
  {
    i18n: 'promotion',
    href: '/promotion'
  },
  {
    i18n: 'activity',
    href: '/activity'
  },
  {
    i18n: 'contact',
    href: '/contact'
  }
];
