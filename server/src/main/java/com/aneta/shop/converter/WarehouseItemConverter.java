package com.aneta.shop.converter;

import com.aneta.shop.dto.WarehouseItemDTO;
import com.aneta.shop.entity.WarehouseItem;
import org.springframework.stereotype.Component;

@Component
public class WarehouseItemConverter implements Converter<WarehouseItem, WarehouseItemDTO> {

    private final ProductConverter productConverter;

    public WarehouseItemConverter(ProductConverter productConverter) {
        this.productConverter = productConverter;
    }

    @Override
    public WarehouseItem convertToEntity(WarehouseItemDTO dto) {
        WarehouseItem warehouseItem = new WarehouseItem();
        warehouseItem.setPrice(dto.getPrice());
        warehouseItem.setId(dto.getId());
        warehouseItem.setQuantity(dto.getQuantity());
        warehouseItem.setProduct(productConverter.convertToEntity(dto.getProduct()));
        return warehouseItem;
    }

    @Override
    public WarehouseItemDTO convertToDTO(WarehouseItem entity) {
        WarehouseItemDTO warehouseItemDTO = new WarehouseItemDTO();
        warehouseItemDTO.setId(entity.getId());
        warehouseItemDTO.setPrice(entity.getPrice());
        warehouseItemDTO.setQuantity(entity.getQuantity());
        warehouseItemDTO.setProduct(productConverter.convertToDTO(entity.getProduct()));
        return warehouseItemDTO;
    }
}
