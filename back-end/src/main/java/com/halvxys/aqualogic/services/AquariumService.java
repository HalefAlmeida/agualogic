package com.halvxys.aqualogic.services;

import com.halvxys.aqualogic.exceptions.NotFoundException;
import com.halvxys.aqualogic.mapper.AquariumMapper;
import com.halvxys.aqualogic.models.Aquarium;
import com.halvxys.aqualogic.models.dto.AquariumDTO;
import com.halvxys.aqualogic.repository.AquariumRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AquariumService implements IServices<Aquarium, AquariumDTO> {

    @Autowired
    private AquariumMapper mapper;

    @Autowired
    private AquariumRepo repo;

    @Override
    public AquariumDTO save(AquariumDTO dto) {
        Aquarium aquarium = mapper.toEntity(dto);

        repo.save(aquarium);
        dto.setNr_sequencia(aquarium.getNr_sequencia());

        return mapper.toDTO(aquarium);
    }

    @Override
    public AquariumDTO update(AquariumDTO dto) {
        Aquarium aquarium = mapper.toEntity(dto);

        repo.save(aquarium);

        return mapper.toDTO(aquarium);
    }

    @Override
    public List<AquariumDTO> findAll() {
        return repo.findAll().stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public AquariumDTO findById(Long id) {
        return repo.findById(id).map(mapper::toDTO).orElseThrow(NotFoundException::new);
    }

    @Override
    public AquariumDTO delete(Long id) {
        AquariumDTO dto = this.findById(id);
        repo.deleteById(dto.getNr_sequencia());
        return dto;
    }
}
