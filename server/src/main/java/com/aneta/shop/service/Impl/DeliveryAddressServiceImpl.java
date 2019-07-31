package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.DeliveryAddressConverter;
import com.aneta.shop.dto.DeliveryAddressDTO;
import com.aneta.shop.entity.DeliveryAddress;
import com.aneta.shop.respository.DeliveryAddressRepository;
import com.aneta.shop.service.DeliveryAddressService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class DeliveryAddressServiceImpl extends AbstractServiceImpl<DeliveryAddress, DeliveryAddressDTO> implements DeliveryAddressService {

    private final DeliveryAddressRepository deliveryAddressRepository;
    private final DeliveryAddressConverter deliveryAddressConverter;

    public DeliveryAddressServiceImpl(DeliveryAddressRepository deliveryAddressRepository, DeliveryAddressConverter deliveryAddressConverter) {
        this.deliveryAddressRepository = deliveryAddressRepository;
        this.deliveryAddressConverter = deliveryAddressConverter;
    }

    @Override
    protected JpaRepository<DeliveryAddress, Long> getRepository() {
        return deliveryAddressRepository;
    }

    @Override
    protected Converter<DeliveryAddress, DeliveryAddressDTO> getConverter() {
        return deliveryAddressConverter;
    }
}
