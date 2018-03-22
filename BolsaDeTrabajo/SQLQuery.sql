SELECT * FROM Sist.Paises
WHERE Sist.Paises.pais LIKE 'Mex%'

DELETE FROM Sist.Paises
WHERE Sist.Paises.Id IN (230)

SELECT * FROM Sist.Estados
--WHERE Sist.Estados.estado IN ('Chihuahua', 'Nuevo Leo', 'Jalisco', 'Veracruz', 'Chiapas')

DELETE FROM Sist.Estados
wHERE Sist.Estados.Id IN (48)

SELECT municipio,  EstadoId, COUNT(*) AS X
FROM Sist.Municipios 
GROUP BY municipio, EstadoId

SELECT * FROM Sist.Municipios
--WHERE Sist.Municipios.municipio IN ('Coyoacan', 'Guadalajara', 'Vega de Alatorre')

DELETE  FROM Sist.Municipios
WHERE Id IN (2476 )

SELECT * FROM Sist.Candidatos
DELETE FROM Sist.Candidatos

SELECT * FROM Sist.Direcciones
DELETE FROM Sist.Direcciones

SELECT * FROM Sist.Emails
DELETE FROM Sist.Emails

SELECT * FROM Sist.Telefonos
DELETE FROM Sist.Telefonos

SELECT * FROM Sist.FormasContacto
DELETE FROM Sist.FormasContacto