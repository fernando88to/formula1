package com.fernando.controller;


import io.quarkus.test.junit.QuarkusTest;
import org.apache.http.HttpStatus;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;

/**
 * Example of tests in https://github.com/quarkusio/quarkus-quickstarts/blob/main/hibernate-reactive-quickstart/src/test/java/org/acme/hibernate/reactive/FruitsEndpointTest.java
 */
@QuarkusTest
class ChampionShipControllerTest {


    /*
    is not necessary
    @ConfigProperty(name = "quarkus.http.root-path")
    String contextPath;*/


    @Test
    @DisplayName("Testar o method de listagem executado com sucesso")
    public void list() {
        given()
                .when()
                .get("/v1/championship/list")
                .then()
                .statusCode(HttpStatus.SC_OK)
                .body(null);
    }

    @Test
    @DisplayName("Testar o method get executado com sucesso")
    public void get() {
        given()
                .when().get(getPathMethodGet())
                .then()
                .statusCode(HttpStatus.SC_OK)
                .body(
                        containsString("\"id\":1"),
                        containsString("\"year\":2018")
                );
    }

    @Test
    public void getOtherMethodHttp() {
        given()
                .when().post(getPathMethodGet())
                .then()
                .statusCode(HttpStatus.SC_BAD_REQUEST);

    }

    private String getPathMethodGet() {
        return "/v1/championship";
    }

}