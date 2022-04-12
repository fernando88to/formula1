package com.fernando.dto.mapper;

import com.fernando.domain.Championship;
import com.fernando.dto.ChampionshipDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

@Mapper(config = QuarkusMappingConfig.class)
public interface ChampionshipMapper {

    public Championship toEntity(ChampionshipDTO championship);

    //essa anotação indica que esse método acima é o aposto , dessa
    //forma se o mapeamento acima vai refletir aqui
    @InheritInverseConfiguration
    public ChampionshipDTO toDto(Championship championship);

}
