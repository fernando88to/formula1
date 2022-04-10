package com.fernando.controller;

import com.fernando.domain.Championship;
import com.fernando.dto.ChampionshipDTO;
import com.fernando.dto.mapper.ChampionshipMapper;
import com.fernando.repository.ChampionschipRepository;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.LocalDate;


@Path("/championship")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ChampionshipController {

    @Inject
    ChampionschipRepository championschipRepository;
    @Inject
    ChampionshipMapper championshipMapper;

    @GET
    @Path("/")
    public Championship get(){
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 1l;
        return championship;
    }

    @POST
    @Path("/")
    @Transactional
    public Response save(@Valid Championship championship){
        try {
            championschipRepository.persistAndFlush(championship);
            return Response.status(201).entity(championship).build();
        } catch (Exception e) {
            return Response.serverError().entity(championship).build();
        }


    }

    @GET
    @Path("/erro")
    public Championship get2(){

        Championship championship = null;
        championship.year = 2018;
        championship.id = 1l;
        return championship;
    }

    @GET
    @Path("/teste")
    public ChampionshipDTO teste(){
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 1l;
        championship.startDate = LocalDate.now();
        championship.endDate = LocalDate.now();
        ChampionshipDTO championshipDTO = championshipMapper.toDto(championship);
        return championshipDTO;


    }
}
