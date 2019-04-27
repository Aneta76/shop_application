package com.aneta.shop.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "role")
public class Role extends AbstractEntity {

    @Column
    private String name;

    @ManyToMany(mappedBy = "roles", cascade = CascadeType.PERSIST)
    private List<User> users;

    public Role(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}