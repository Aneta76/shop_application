package com.aneta.shop.resource;

import com.aneta.shop.dto.DeliveryAddressDTO;
import com.aneta.shop.entity.DeliveryAddress;
import com.aneta.shop.service.DeliveryAddressService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/delivery")
public class DeliveryAddressResource extends AbstractResource<DeliveryAddress, DeliveryAddressDTO> {

    private final DeliveryAddressService deliveryAddressService;

    public DeliveryAddressResource(DeliveryAddressService deliveryAddressService) {
        this.deliveryAddressService = deliveryAddressService;
    }

    @Override
    public DeliveryAddressService getService() {
        return deliveryAddressService;
    }
}
