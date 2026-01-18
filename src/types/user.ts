export type User = {
    id: number,
    name: string,
    email: string,
    role: string,
    photo?: string,
    photoUrl?: string,
    phone: string,
    sex: string,
    status: boolean,
    bgColor: string,
    firstAccess: boolean,
    createdAt: string,
    updatedAt?: string
}