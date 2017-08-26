# Aplicación React

### Paso 1:

Para incializar el proyecto se tiene que contar con una instalacion previa de node, en el caso de no tenerl se puede descargar en la siguiente liga.

* [**NodeJS**](https://nodejs.org/en/download/)

## Paso2 :

Al contar con la instalacion de node procederemos a la creación del manifiesto ejecutando el comando.

**`npm init`**

despues de crear el manifiesto se incia la instalcion de las dependencias las cuales se dividen en.

#### Dependencias de Producción

**`npm i -S react react-dom react-router`**

> **Nota :**_** **las dependencias que se instalen en esta seccion son las dependencias que estran en el servidor de produccion, si vemos nuestro archivo package.json, las dependencias instaladas estaran debajo de** dependencies.**_

#### Dependencias de Desarrollo

**`npm i -D babel-core babel-loader babel-preset-latest-minimal babel-preset-react json-loader webpack`**

> _**Nota : **Las dependencias que se instalen en esta seccion son las dependencias que estran en el servidor de produccion, si vemos nuestro archivo package.json, las dependencias instaladas estaran debajo de **devDependencies**._

---

> **Nota** : _en el caso de querer instalar todas las librerias necesarias para esta aplicacion, se podria ejecutar simplemente el comando .    
> _**`npm install`**  
> _esto descargara los paquetes necesarios para nuestra aplicacion._

# Formar de estructurar el proyecto

## File-Type First \(FTF\)

Es simplemente organizar sus archivos de la aplicación por su función. Cada tipo de archivo vive bajo un padre común que otros tipos de archivo no. Por ejemplo: todos los componentes de React vivirían bajo /Components. 

```txt
/-App
  /-Styles
    /-Form.css
  /-Components
    /-CommentAuthor.jsx
    /-CommentForm.jsx
    /-CommentList.jsx
  /-Containers
    /-Comment.jsx
  /-Records
    /-comment.js
  /-Utils
    /-Api.js
  /-index.js
```

### Ventajas

1. Fácil de organizar inicialmente
2. No hay dudas sobre donde colocar cada archivo
3. Archivos que importan otros del mismo tipo solo tienen que buscar en su propia carpeta.
4. Si usas un sistema de carga automática se vuelve más fácil de esta forma.

## Feature First \(Pods\)

Si ha mirado a Ember en absoluto entonces usted puede estar familiarizado con el concepto de vainas, donde la característica viene primero. Nuestra carpeta de nivel superior es el nombre de la función y cada pod puede organizarse con cualquier tipo de archivo que la función pueda requerir.

```
/-app
  /-comment
    /-components
      /-Author.jsx
      /-Form.jsx
      /-List.jsx
      /-Star.jsx
    /-containers
      /-App.jsx
      /-Comment.jsx
    /-utils
    /-records.js
    /-api.js
    /-Container.jsx
    /-index.js
  /-shared
    /-components
    /-utils
    /-api.js
  /-routes.js
  /-index.js
```

### Ventajas

1. Es fácil nombrar features
2. Independiente de frameworks, cada feature podría usar internamente su propia organización dependiendo del framework o librería usada
3. El punto de entrada es obvio para cada feature y para la aplicación
4. Hacer code-splitting es trivial.

## App of Apps

¿Las vainas se mantienen si aplicamos aún más la organización del producto? A medida que crezca, probablemente desee dividir secciones grandes de su aplicación en aplicaciones más pequeñas. Por ejemplo, cada pestaña de nivel superior en Twitter es fácilmente su propia aplicación.





