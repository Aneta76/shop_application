package com.aneta.shop.respository;

import com.aneta.shop.entity.OrderElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderElementRepository extends JpaRepository<OrderElement, Long> {
}
