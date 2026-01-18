/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-stores"


type Props = {
    user: any
}
export const AuthHydrator = ({ user }: Props) => {
    const { setUser } = useAuthStore(state=>state)

    useEffect(() => {
        setUser(user)
    },[user, setUser])

    return null
}