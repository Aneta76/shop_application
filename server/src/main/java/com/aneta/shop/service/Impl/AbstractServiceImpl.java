package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.dto.AbstractDTO;
import com.aneta.shop.entity.AbstractEntity;
import com.aneta.shop.service.AbstractService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

public abstract class AbstractServiceImpl<ENTITY extends AbstractEntity, DTO extends AbstractDTO> implements AbstractService<ENTITY, DTO> {

    protected abstract JpaRepository<ENTITY, Long> getRepository();

    protected abstract Converter<ENTITY, DTO> getConverter();

    @Override
    @Transactional
    public DTO update(DTO dto) {
        ENTITY entity = getConverter().convertToEntity(dto);
        return getConverter().convertToDTO(getRepository().save(entity));
    }

    @Override
    @Transactional(readOnly = true)
    public DTO findById(Long id) {
        ENTITY entity = getRepository().getOne(id);
        return getConverter().convertToDTO(entity);
    }

    @Override
    @Transactional
    public DTO save(DTO dto) {
        ENTITY entity = getConverter().convertToEntity(dto);
        return getConverter().convertToDTO(getRepository().save(entity));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        getRepository().deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<DTO> getAll() {
        return getConverter().convertToDtos(getRepository().findAll());
    }
}
