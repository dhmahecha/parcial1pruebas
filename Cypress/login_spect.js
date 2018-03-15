describe('Los estudiantes signup', function() {
    it('Prueba de login correcto', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.contains('Registrarse').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("dp.espitia@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("pruebataller3")
      cy.screenshot('InicioLoginExitoso');
      cy.wait(500)
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.wait(800)
      cy.screenshot('FinLoginExitoso');
    })
})
