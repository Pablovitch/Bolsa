SELECT * FROM Sist.Paises
WHERE Sist.Paises.pais LIKE 'Mex%'

DELETE FROM Sist.Paises
WHERE Sist.Paises.Id IN (222, 219)

SELECT * FROM Sist.Direcciones
WHERE Sist.Direcciones.PaisId IN (217, 219)

DELETE FROM Sist.Direcciones
WHERE Sist.Direcciones.Id IN (8,11)

SELECT * FROM Sist.Estados 
WHERE Sist.Estados.Id IN (37,35,34)
DELETE FROM Sist.Estados 
WHERE Sist.Estados.Id IN (40)

SELECT municipio,  EstadoId, COUNT(*) AS X
FROM Sist.Municipios 
GROUP BY municipio, EstadoId

SELECT * FROM Sist.Municipios
WHERE Sist.Municipios.municipio IN ('Coyoacan', 'Guadalajara', 'Vega de Alatorre')

DELETE  FROM Sist.Municipios
WHERE Id IN (2462, 2463, 2468)

SELECT * FROM Sist.Colonias
WHERE CP=32020

DELETE FROM Sist.Colonias
WHERE Id IN (21001, 21003)

SELECT * FROM SIST.FormasContacto