package com.udremaja.udremaja.core.address

import com.udremaja.udremaja.base.DatabaseEntity
import javax.persistence.Entity

@Entity
open class Address(
        val street: String,
        val city: String,
        val province: String?,
        val postalCode: String,
        name: String = ""
) : DatabaseEntity(name) {
}