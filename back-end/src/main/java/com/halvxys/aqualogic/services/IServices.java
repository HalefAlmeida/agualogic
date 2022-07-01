package com.halvxys.aqualogic.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public interface IServices<entity, dto> {
    @Transactional
    public dto save(dto dto);

    public dto update(dto dto);

    @Transactional(readOnly = true)
    public List<dto> findAll();

    @Transactional(readOnly = true)
    public dto findById(Long id);

    @Transactional()
    public dto delete(Long id);
}
