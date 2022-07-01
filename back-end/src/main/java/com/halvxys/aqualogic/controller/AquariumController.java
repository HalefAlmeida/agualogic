package com.halvxys.aqualogic.controller;

import com.halvxys.aqualogic.models.dto.AquariumDTO;
import com.halvxys.aqualogic.services.AquariumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/aquarium")
public class AquariumController implements IController<AquariumDTO>{

    @Autowired
    private AquariumService service;

    @Override
    public ResponseEntity<AquariumDTO> save(AquariumDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @Override
    public ResponseEntity<AquariumDTO> update(AquariumDTO dto) {
        return ResponseEntity.ok(service.update(dto));
    }

    @Override
    public ResponseEntity<List<AquariumDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<AquariumDTO> findById(Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @Override
    public ResponseEntity<AquariumDTO> delete(Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
