package com.aneta.shop.Resource;

import com.aneta.shop.dto.WarehouseItemDTO;
import com.aneta.shop.entity.WarehouseItem;
import com.aneta.shop.service.WarehouseItemService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/warehouse")
public class WarehouseItemResource extends AbstractResource<WarehouseItem, WarehouseItemDTO> {

    private final WarehouseItemService warehouseItemService;

    public WarehouseItemResource(WarehouseItemService warehouseItemService) {
        this.warehouseItemService = warehouseItemService;
    }

    @Override
    public WarehouseItemService getService() {
        return this.warehouseItemService;
    }
}
