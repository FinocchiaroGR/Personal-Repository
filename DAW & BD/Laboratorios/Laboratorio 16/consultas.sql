--Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".

SELECT M.clave, M.descripcion FROM Materiales M, Entregan E
WHERE E.Clave = M.Clave and M.descripcion= ‘México sin ti no estamos completos’

--Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".

SELECT M.clave, M.descripcion
FROM Materiales M, Entregan E, Proveedores Pr
WHERE E.Clave = M.Clave and Pr.RFC= E.RFC and Pr.razonsocial= ‘Acme tools’

--El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.

SELECT E.RFC
FROM Entregan E
WHERE cantidad >= 300 and E.fecha Between '01-JAN-2000' AND '31-DEC-2000'

--El Total entregado por cada material en el año 2000.

SELECT M.descripcion, COUNT(E.Cantidad ) AS 'Total entregado' FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave and E.fecha Between '01-JAN-2000' AND '31-DEC-2000' GROUP BY M.descripcion

--La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)

SELECT materiales TOP 1 clave FROM Entregan
WHERE fecha Between '01-JAN-2001' AND '31-DEC-2001'

--Productos que contienen el patrón 'ub' en su nombre.

SELECT M.descripcion FROM Materiales M
WHERE M.descripcion LIKE '%ub%'

--Denominación y suma del total a pagar para todos los proyectos.

SELECT P.denominacion, SUM((E.Cantidad * M.Costo)) AS 'Suma total de proyectos' FROM Entregan E, Materiales M, Proyectos P
WHERE E.Clave = M.Clave and P.numero= E.numero
Group BY P.denominacion

--Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).

CREATE VIEW solovista1
AS SELECT P.denominacion, Pr.RFC

--Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).

SELECT P.denominacion, Pr.RFC,Pr.razonsocial
FROM Entregan E, Proyectos P, Proveedores Pr, Materiales M
WHERE Pr.RFC= E.RFC and P.numero=E.numero and M.clave= E.clave AND P.denominacion NOT IN
( SELECT P.denominacion FROM Proyectos P WHERE P.denominacion NOT LIKE 'Televisa en acción')
except
SELECT P.denominacion, Pr.RFC,Pr.razonsocial
FROM Entregan E, Proyectos P, Proveedores Pr, Materiales M
WHERE Pr.RFC= E.RFC and P.numero=E.numero and M.clave= E.clave AND P.denominacion NOT IN
( SELECT P.denominacion FROM Proyectos P WHERE P.denominacion NOT LIKE 'Educando en Coahuila')

--Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.

SELECT M.descripcion, M.costo
FROM Entregan E, Materiales M, Proyectos P
 
WHERE E.Clave = M.Clave and P.numero= E.numero and Denominacion= 'Televisa en acción'
Union
SELECT M.descripcion, M.costo
FROM Entregan E, Materiales M, Proyectos P
WHERE E.Clave = M.Clave and P.numero= E.numero and Denominacion= 'Educando en Coahuila'


--Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.

SELECT M.descripcion, COUNT(E.Cantidad) AS 'Cantidad de veces', SUM((E.Cantidad * M.Costo)) AS 'Suma total de proyectos'
FROM Entregan E, Materiales M, Proyectos P
WHERE E.Clave = M.Clave and P.numero= E.numero Group BY M.descripcion