package com.aneta.shop.service;

import com.aneta.shop.dto.OrderDTO;
import com.aneta.shop.entity.Order;

import java.util.Collection;

public interface OrderService extends AbstractService<Order, OrderDTO> {
    Collection<OrderDTO> findOrdersByUserId(Long id);
}
