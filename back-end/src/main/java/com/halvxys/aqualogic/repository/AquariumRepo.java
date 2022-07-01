package com.halvxys.aqualogic.repository;

import com.halvxys.aqualogic.models.Aquarium;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AquariumRepo extends JpaRepository<Aquarium, Long> {
}
