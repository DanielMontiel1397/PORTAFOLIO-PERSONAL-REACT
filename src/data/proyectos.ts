import { ProyectosType } from "../types"
  
  const proyectos : ProyectosType[] = [
    {   id: 1,
        nombre: 'React, Guitarra LA',
        tecnologias: 'React, TypeScript.',
        descripcion: 'En esta práctica se utilizaron varios conceptos, como componentes para mostrar las diferentes guitarras, props para asi poder pasarle información a los componentes, hooks para poder almacenar los datos del carrito y la base de datos, se creo nuestro propio hook para que no haya tanta lógica en los componentes, finalmente se realizo que la información se guarde y se obtenga desde LocalStorage. En esta práctica se uso TypeScript para un mejor control del tipado.',
        link: 'https://662fd29ee55fa350ac716359--lustrous-tanuki-e7ffe9.netlify.app/',
        imagen: 'R01_GuitarraLA.png'
    },
    {   id: 2,
        nombre: 'Calculadora de Propinas',
        tecnologias: 'React, TypeScript',
        descripcion: 'En esta práctica se realizo una calculadora de propinas, donde puedes seleccionar un producto, dar propina y obtener información del precio. En esta práctica se uso de igual manera un Custom hook, hooks como useState, useMemo, se crearon componentes para mostrar el menu, las ordenes, la propina y el total, se creo un archivo que funcionara como base de datos, la información de los componentes se pasaron via props. En esta práctica se uso TypeScript para tener un mejor tipado de los datos.',
        link: 'https://66307787c011417f07b37827--enchanting-cassata-2b71f3.netlify.app/',
        imagen: 'R02_Calculadora-Propinas.png'
    },
    {   id: 3,
        nombre: 'Contador de Calorías',
        tecnologias: 'React, TypeScript, TailwindCSS, Context, UseReducer',
        descripcion: 'En este proyecto se uso Context para poder tener el uso de las funcionalidades de nuestra aplicacion en todos los componentes y asi no tener que enviar tantos props, de igual manera para el control de las calorias se uso useReducer para poder usar los actions relacionados como guardar, editar, eliminar o reiniciar, para el maquetado se uso TailwindCSS.',
        link: 'https://statuesque-pie-1aa7d6.netlify.app/',
        imagen: 'R03_Contador-Calorias-Context.png'
    },
    {   id: 4,
        nombre: 'Bienes Raices',
        tecnologias: 'Node, Express, TailwindCSS, MySQL, Sequelize, PUG, Multer',
        descripcion: 'Proyecto para publicar bienes raices en renta, cuenta con un registro de usuario por medio de confirmación via gmail, autenticación de usuario al iniciar sesión, donde creamos un JWT para autenticar al usuario y darle permiso para navegar dentro de las diferentes páginas, tiene un registro de propiedades que con leaflet permitimos añadir la ubicación del mapa y con ayuda de multer el poder subir una imagen, el usuario tiene la opción de eliminar, editar y publicar o despublicar sus propiedades, asi como dejar mensajes de propiedades de otros usuarios.\nEste proyecto uso el framework express para poder usar sus diferentes fuciones como Routes, express-validator, se uso el ORM Sequelize para una mejor comunicación con la DB que fue realizada en MySQL, para las vistas se uso un View Engine PUG, tenemos relaciones de tablas para relacionar las tablas de propiedades con cada usuario, asi como las categorias y precios con las diferentes propiedades, se uso nodemailer para la confirmación de cuentas.',
        link: 'https://p02-bienes-raices-mvc.onrender.com/',
        imagen: 'P01_Bienes-Raices.png'
    },
    {   id: 5,
        nombre: 'Administrador de Pacientes de Veterinaria',
        tecnologias: 'React, Node, Express, TailwindCSS, MongoDB, variables de entorno, nodemailer',
        descripcion: 'Proyecto de Administrador de Pacientes de Veterinaria donde se divide el Backend y Frontend, para el backend se uso NodeJS con el framework Express, se uso un diseño MVC para separar las vistas, los controladores y los modelos, para la base de datos se uso MongoDB, usamos variables de entorno para ocultar la información importante como lo es la conexión a la base de datos y las credenciales para el envio de emails, se crearon peticiones API para la creacion, edicion, eliminacion y lectura de la DB, se uso Middelware para validar la autenticación del usuario al iniciar sesión, el registro de usuario necesita la confirmación de la cuenta via gmail, cada veterinario puede agregar pacientes, editarlos y eliminarlos, e incluso puede editar la información de su perfil.\nDel lado del Frontend se uso React para las vistas, se uso context para crear funciones disponibles en toda la página que son las que mandaran las consultas API CRUD, para el direccinamiento de los links se uso reac-router-dom, para dividir las rutas dependiendo de lo que se este haciendo, ya sea autenticacion o registro de veterinario, o las vistas de administrador ya que el veterinario haya iniciado sesión, estas vistas igual estan protegidas ya que se almacena un token en el localStorage que nos da la información del usuario que inicio sesión.',
        link: 'https://p05-administrador-pacientes-veterinaria-frontend-md49.vercel.app/',
        imagen: 'P02_Administrador-Pacientes-Veterinaria.png'
    },
    {   id: 6,
        nombre: 'Control de Gastos',
        tecnologias: 'React, Context, useReducer, typeScript',
        descripcion: 'Proyecto realizado en React de control de gastos, donde pedimos al usuario su presupuesto para poder iniciar la aplicación, se usuarion varias librerias para las vistas como lo son react-circular-progressbar, Fragment. Usamos Context para que las funciones esten disponibles en toda la aplicación, el control del state lo tenemos con useReducer, para asi manejar las funciones dispatch como agregar gasto, mostrar modal, eliminar gasto, editar gasto, nuestro state lo almacenamos en el localStorage, usamos TypeScript para un mejor tipado de la aplicación.',
        link: 'https://comfy-sorbet-f29cea.netlify.app/',
        imagen: 'R04_Control-Gastos.png'
    }
  ]

  export {
    proyectos
  }