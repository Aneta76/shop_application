package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.WarehouseItemConverter;
import com.aneta.shop.dto.WarehouseItemDTO;
import com.aneta.shop.entity.WarehouseItem;
import com.aneta.shop.respository.WarehouseItemRepository;
import com.aneta.shop.service.WarehouseItemService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class WarehouseItemServiceImpl extends AbstractServiceImpl<WarehouseItem, WarehouseItemDTO> implements WarehouseItemService {

    private final WarehouseItemRepository warehouseItemRepository;
    private final WarehouseItemConverter warehouseItemConverter;

    public WarehouseItemServiceImpl(WarehouseItemRepository warehouseItemRepository, WarehouseItemConverter warehouseItemConverter) {
        this.warehouseItemRepository = warehouseItemRepository;
        this.warehouseItemConverter = warehouseItemConverter;
    }

    @Override
    protected JpaRepository<WarehouseItem, Long> getRepository() {
        return warehouseItemRepository;
    }

    @Override
    protected Converter<WarehouseItem, WarehouseItemDTO> getConverter() {
        return warehouseItemConverter;
    }
}
