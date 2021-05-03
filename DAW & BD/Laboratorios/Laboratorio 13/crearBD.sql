IF EXISTS(
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Materiales'
)

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Proveedores'
)

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Proyectos'
)

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Entregan'
)

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)


BULK INSERT a1704007.a1704007.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1704007.a1704007.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1704007.a1704007.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1704007.a1704007.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )




INSERT INTO Materiales values(1000, 'xxx', 1000)


Delete from Materiales where Clave = 1000 and Costo = 1000


ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales values(1000, 'xxx', 1000)


sp_helpconstraint Materiales


ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyecto PRIMARY KEY (Numero)


ALTER TABLE Entregan add constraint llavesEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)


--SELECT * from Materiales;
--SELECT * from Proveedores;
--SELECT * from Proyectos;
--SELECT * from Entregan;

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0);

Delete from Entregan where Clave = 0

ALTER TABLE Entregan add constraint llaveForaneaMateriales
    foreign key (clave) references Materiales(clave);

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0);


ALTER TABLE entregan add constraint llavesForaneasProveedores
    foreign key (RFC) references proveedores(RFC);
ALTER TABLE Entregan add constraint llaveForaneaProyecto
    foreign key (Numero) references Proyectos(Numero);

Delete from Entregan where Cantidad = 0

ALTER TABLE entregan add constraint cantidad check (cantidad > 0);

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);