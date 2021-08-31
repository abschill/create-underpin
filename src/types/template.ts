import Partial from './partial';
export interface Template {
    title?: string,
    description?: string,
    favicon?: string,
    ogImage?: string,
    partials?: Partial[]
    headerElements: HTMLCollection,
    bodyElements: HTMLCollection 
}