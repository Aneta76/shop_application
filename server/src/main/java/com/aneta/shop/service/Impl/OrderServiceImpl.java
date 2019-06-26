package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.OrderConverter;
import com.aneta.shop.dto.OrderDTO;
import com.aneta.shop.entity.Order;
import com.aneta.shop.respository.OrderRepository;
import com.aneta.shop.service.OrderService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends AbstractServiceImpl<Order, OrderDTO> implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderConverter orderConverter;

    public OrderServiceImpl(OrderRepository orderRepository, OrderConverter orderConverter) {
        this.orderRepository = orderRepository;
        this.orderConverter = orderConverter;
    }

    @Override
    protected JpaRepository<Order, Long> getRepository() {
        return orderRepository;
    }

    @Override
    protected Converter<Order, OrderDTO> getConverter() {
        return orderConverter;
    }
}
