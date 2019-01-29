package com.aneta.shop.Resource;

import com.aneta.shop.dto.AbstractDTO;
import com.aneta.shop.entity.AbstractEntity;
import com.aneta.shop.service.AbstractService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public abstract class AbstractResource<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {

    public abstract AbstractService<ENTITY, DTO> getService();

    @GetMapping("/all/{id}")
    public DTO getById(@PathVariable Long id) {
        return getService().findById(id);
    }

    @GetMapping("/all")
    public Collection<DTO> getAll() {
        return getService().getAll();
    }

    @PostMapping("/new")
    public DTO createNew(@RequestBody DTO dto) {
        return getService().save(dto);
    }

    @PutMapping("/update")
    public DTO update(@RequestBody DTO dto) {
        return getService().update(dto);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        getService().delete(id);
    }
}