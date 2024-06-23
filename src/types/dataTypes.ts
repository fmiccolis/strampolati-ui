export type UserProps = {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    access: string,
    refresh: string,
    profile_pic?: string,
    is_superuser?: boolean
}

export type AuthResponse = {
    user: UserProps
    access: string
    refresh: string
}

export type ItemResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: ItemProps[]
}

export type ItemProps = {
    id?: number | null,
    name: string,
    image: string,
    quantity: number
}