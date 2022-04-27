package com.fernando.controller;


import io.quarkus.test.junit.QuarkusTest;
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
    public void get() {
        //String path = contextPath + "/championship";
        given()
                .when().get("/v1/championship")
                .then()
                .statusCode(200)
                .body(
                        containsString("\"id\":1"),
                        containsString("\"year\":2018")
                );
    }
}