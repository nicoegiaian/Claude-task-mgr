# Task Manager - Gestión Profesional de Tareas

Una aplicación moderna y completa para la gestión de tareas con características avanzadas como organización jerárquica, analytics en tiempo real y autenticación SSO.

## 🚀 Características Principales

### ✅ Gestión de Tareas
- **CRUD completo** de tareas con estados (Pendiente, En Progreso, Completada)
- **Sistema de prioridades** (Baja, Media, Alta, Urgente)
- **Fechas de vencimiento** y seguimiento de progreso
- **Bitácora completa** con comentarios, imágenes y archivos adjuntos

### 🏷️ Tags Jerárquicos
- **Organización en 3 niveles** de profundidad
- **Colores personalizables** para cada tag
- **Filtrado avanzado** por categorías y subcategorías

### 📊 Dashboard y Analytics
- **Métricas de productividad** en tiempo real
- **Gráficos de tiempo de vida** de tareas
- **Análisis de duración** hasta completar
- **Filtros por tags** y períodos de tiempo

### 🔐 Autenticación Segura
- **Login SSO** con Google, Microsoft y Apple
- **Sesiones seguras** con NextAuth.js
- **Protección de rutas** automática

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling
- **Shadcn/ui** para componentes
- **React Hook Form** + **Zod** para validación

### Backend
- **Next.js API Routes** (Full-stack)
- **Prisma ORM** para base de datos
- **NextAuth.js** para autenticación

### Base de Datos
- **PlanetScale** (MySQL serverless)
- **Prisma** como ORM

### Deployment
- **Vercel** para hosting
- **GitHub** para control de versiones

## 📦 Instalación y Setup

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta en PlanetScale
- Aplicaciones OAuth configuradas (Google, Microsoft, Apple)

### 1. Clonar el repositorio
```bash
git clone https://github.com/nicoegiaian/task-manager.git
cd task-manager
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Copia `.env.example` a `.env.local` y completa las variables:

```bash
cp .env.example .env.local
```

Configurar en `.env.local`:
```env
# Database
DATABASE_URL="mysql://username:password@host/database?sslaccept=strict"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret-key-aquí"

# OAuth Providers
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"

MICROSOFT_CLIENT_ID="tu-microsoft-client-id"
MICROSOFT_CLIENT_SECRET="tu-microsoft-client-secret"

APPLE_CLIENT_ID="tu-apple-client-id"
APPLE_CLIENT_SECRET="tu-apple-client-secret"

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN="tu-vercel-blob-token"
```

### 4. Configurar base de datos
```bash
# Generar cliente Prisma
npm run db:generate

# Sincronizar esquema con PlanetScale
npm run db:push

# (Opcional) Abrir Prisma Studio
npm run db:studio
```

### 5. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🔧 Configuración de OAuth

### Google OAuth
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+
4. Crea credenciales OAuth 2.0
5. Agrega `http://localhost:3000/api/auth/callback/google` como URI de redirección

### Microsoft OAuth
1. Ve a [Azure Portal](https://portal.azure.com/)
2. Registra una nueva aplicación en Azure AD
3. Configura los permisos necesarios
4. Agrega `http://localhost:3000/api/auth/callback/azure-ad` como URI de redirección

### Apple OAuth
1. Ve a [Apple Developer](https://developer.apple.com/)
2. Crea un Service ID
3. Configura Sign in with Apple
4. Agrega `http://localhost:3000/api/auth/callback/apple` como URI de redirección

## 📁 Estructura del Proyecto

```
task-manager/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── auth/              # Páginas de autenticación
│   ├── dashboard/         # Dashboard principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI
│   └── providers/        # Providers de contexto
├── lib/                  # Utilidades y configuraciones
│   ├── auth.ts           # Configuración NextAuth
│   ├── prisma.ts         # Cliente Prisma
│   └── utils.ts          # Utilidades generales
├── prisma/               # Esquema y migraciones
│   └── schema.prisma     # Esquema de base de datos
└── public/               # Archivos estáticos
```

## 🚀 Deployment en Vercel

### 1. Conectar con GitHub
1. Haz push de tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Configura las variables de entorno en Vercel

### 2. Variables de entorno en Vercel
Agrega todas las variables del archivo `.env.local` en la configuración de Vercel.

### 3. Deploy automático
Vercel desplegará automáticamente en cada push a la rama principal.

## 📊 Modelos de Datos

### User
- Información básica del usuario
- Relaciones con accounts, sessions, tasks y tags

### Task
- Título, descripción, estado, prioridad
- Fechas de creación, vencimiento y completado
- Relaciones con tags, comentarios y archivos

### Tag
- Sistema jerárquico de 3 niveles
- Colores personalizables
- Relación parent-child

### TaskComment
- Comentarios y bitácora de progreso
- Soporte para rich text

### TaskAttachment
- Archivos adjuntos (imágenes, documentos, enlaces)
- Integración con Vercel Blob Storage

## 🔄 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint

# Base de datos
npm run db:generate  # Generar cliente Prisma
npm run db:push      # Push del esquema a la DB
npm run db:studio    # Abrir Prisma Studio
npm run db:seed      # Sembrar datos de prueba
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Nicolás Egiaian**
- GitHub: [@nicoegiaian](https://github.com/nicoegiaian)
- LinkedIn: [Nicolás Egiaian](https://linkedin.com/in/nicolasegiaian)

## 🆘 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación
2. Busca en los [Issues](https://github.com/nicoegiaian/task-manager/issues) existentes
3. Crea un nuevo issue si es necesario

---

⭐ ¡Dale una estrella al repo si te ha sido útil!