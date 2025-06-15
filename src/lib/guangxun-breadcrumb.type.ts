export type Breadcrumb = {
  label: string;
  link: string;
  isClickable: boolean;
};

export interface BreadcrumbConfig {
  homePath?: string;
  homeLabel?: string;
}
