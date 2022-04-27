package com.fernando.controller;

import com.fernando.domain.Championship;

import javax.ws.rs.GET;
import javax.ws.rs.Path;


@Path("/v2/championship")
public class ChampionshipControllerV2 extends ChampionshipController {


    @GET
    @Path("/")
    public Championship get() {
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 2l;
        return championship;
    }
}
