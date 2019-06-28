package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.OrderElementConverter;
import com.aneta.shop.dto.OrderElementDTO;
import com.aneta.shop.entity.OrderElement;
import com.aneta.shop.respository.OrderElementRepository;
import com.aneta.shop.service.OrderElementService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderElementServiceImpl extends AbstractServiceImpl<OrderElement, OrderElementDTO> implements OrderElementService {

    private final OrderElementRepository orderElementRepository;
    private final OrderElementConverter orderElementConverter;

    public OrderElementServiceImpl(OrderElementRepository orderElementRepository, OrderElementConverter orderElementConverter) {
        this.orderElementRepository = orderElementRepository;
        this.orderElementConverter = orderElementConverter;
    }

    @Override
    protected JpaRepository<OrderElement, Long> getRepository() {
        return orderElementRepository;
    }

    @Override
    protected Converter<OrderElement, OrderElementDTO> getConverter() {
        return orderElementConverter;
    }
}
