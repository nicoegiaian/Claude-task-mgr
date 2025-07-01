"use client"

import { signIn, getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignIn() {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, [router])

  const handleSignIn = async (provider: string) => {
    setIsLoading(provider)
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error('Error signing in:', error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Task Manager</CardTitle>
          <CardDescription>
            Inicia sesión para acceder a tu gestor de tareas profesional
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn('google')}
            disabled={!!isLoading}
          >
            {isLoading === 'google' ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2" />
            ) : (
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            Continuar con Google
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn('azure-ad')}
            disabled={!!isLoading}
          >
            {isLoading === 'azure-ad' ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2" />
            ) : (
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h11v11H0z"/>
                <path d="M12 0h12v11H12z" opacity="0.8"/>
                <path d="M0 12h11v12H0z" opacity="0.6"/>
                <path d="M12 12h12v12H12z" opacity="0.4"/>
              </svg>
            )}
            Continuar con Microsoft
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn('apple')}
            disabled={!!isLoading}
          >
            {isLoading === 'apple' ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2" />
            ) : (
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.38 7.75 12.1 7.75C12.81 7.75 14.28 6.68 15.87 6.84C16.57 6.87 18.39 7.12 19.56 8.82C19.47 8.5 17.79 7.68 17.55 5.53C17.31 3.38 18.75 1.44 20.91 1.44C22.22 1.44 23.12 2.18 23.12 3.21C23.12 4.24 22.22 4.58 20.91 4.58C19.6 4.58 18.71 3.84 18.71 2.81V19.5Z"/>
              </svg>
            )}
            Continuar con Apple
          </Button>

          <div className="text-center text-sm text-muted-foreground mt-6">
            Al continuar, aceptas nuestros términos de servicio y política de privacidad
          </div>
        </CardContent>
      </Card>
    </div>
  )
}