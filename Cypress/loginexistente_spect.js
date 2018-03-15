describe('Los estudiantes login existente ', function() {
    it('Prueba de creación de una cuenta con un login que ya existe', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.contains('Registrarse').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Diana")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Espitia")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("diana.espitia@example.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("universidad-de-los-andes")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("16")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("pruebataller3")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.screenshot('InicioPruebaLoginCorrecto');
      cy.wait(500)
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Error: Ya existe un usuario registrado con el correo')
      cy.screenshot('FinPruebaLoginCorrecto');
      cy.wait(500)
    })
})
