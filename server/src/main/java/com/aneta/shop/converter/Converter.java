package com.aneta.shop.converter;

import com.aneta.shop.dto.AbstractDTO;
import com.aneta.shop.entity.AbstractEntity;

import java.util.List;
import java.util.stream.Collectors;

public interface Converter <ENTITY extends AbstractEntity,DTO extends AbstractDTO> {

    ENTITY convertToEntity(DTO dto);

    DTO convertToDTO(ENTITY entity);

    default List<ENTITY> convertToEntities(List<DTO> dtos) {
        return dtos.stream().map(this::convertToEntity).collect(Collectors.toList());
    }

    default List<DTO> convertToDtos(List<ENTITY> entities) {
        return entities.stream().map(this::convertToDTO).collect(Collectors.toList());
    }


}


