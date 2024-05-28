import { ReactElement } from 'react'

export interface RouteConfig {
    path: string,
    element: ReactElement,
    label: string,
    auth?: boolean,
    icon?: string,
}