package com.aneta.shop.entity;

import javax.persistence.Embeddable;
import javax.persistence.Table;

@Embeddable
@Table(name = "role")
public enum Role {

    USER,
    MODERATOR,
    ADMIN
}
