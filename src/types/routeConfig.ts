import { ComponentType } from 'react'

export interface RouteConfig {
    path: string,
    element: () => Promise<{ default: ComponentType<any> }>,
    label: string,
    auth?: boolean,
    icon?: string,
}