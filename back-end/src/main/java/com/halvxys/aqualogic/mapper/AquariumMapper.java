package com.halvxys.aqualogic.mapper;

import com.halvxys.aqualogic.models.Aquarium;
import com.halvxys.aqualogic.models.dto.AquariumDTO;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AquariumMapper implements IMapper<Aquarium, AquariumDTO> {
    @Override
    public Aquarium toEntity(AquariumDTO dto) {
        Aquarium aquarium = new Aquarium();

        aquarium.setNr_sequencia(dto.getNr_sequencia());
        aquarium.setNm_aquarium(dto.getNm_aquarium());
        aquarium.setIe_ativo(dto.getIe_status());

        return aquarium;
    }

    @Override
    public AquariumDTO toDTO(Aquarium aquarium) {
        AquariumDTO dto = new AquariumDTO();

        dto.setNr_sequencia(aquarium.getNr_sequencia());
        dto.setNm_aquarium(aquarium.getNm_aquarium());
        dto.setIe_status(aquarium.getIe_ativo());

        return dto;
    }

    @Override
    public List<AquariumDTO> toDTO(List<Aquarium> listDTO) {
        return listDTO.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
