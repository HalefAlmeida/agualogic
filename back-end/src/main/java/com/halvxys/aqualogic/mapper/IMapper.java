package com.halvxys.aqualogic.mapper;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface IMapper<entity, dto> {
    public entity toEntity(dto dto);
    public dto toDTO(entity entity);
    public List<dto> toDTO(List<entity> listDTO);
}
