package com.aneta.shop.converter;

import com.aneta.shop.dto.DeliveryAddressDTO;
import com.aneta.shop.entity.DeliveryAddress;
import org.springframework.stereotype.Component;

@Component
public class DeliveryAddressConverter implements Converter<DeliveryAddress, DeliveryAddressDTO> {

    @Override
    public DeliveryAddress convertToEntity(DeliveryAddressDTO dto) {
        DeliveryAddress deliveryAddress = new DeliveryAddress();
        deliveryAddress.setId(dto.getId());
        deliveryAddress.setCity(dto.getCity());
        deliveryAddress.setZipCode(dto.getZipCode());
        deliveryAddress.setStreet(dto.getStreet());
        return deliveryAddress;
    }

    @Override
    public DeliveryAddressDTO convertToDTO(DeliveryAddress entity) {
        DeliveryAddressDTO deliveryAddressDTO = new DeliveryAddressDTO();
        deliveryAddressDTO.setId(entity.getId());
        deliveryAddressDTO.setCity(entity.getCity());
        deliveryAddressDTO.setStreet(entity.getStreet());
        deliveryAddressDTO.setZipCode(entity.getZipCode());
        return deliveryAddressDTO;
    }
}
