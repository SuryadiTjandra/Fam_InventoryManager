package com.udremaja.udremaja.core.address

import com.udremaja.udremaja.base.DatabaseEntity
import net.bytebuddy.matcher.BooleanMatcher
import javax.persistence.Entity
import javax.persistence.OneToOne

@Entity
class BusinessPartner(
        name: String,
        @OneToOne val address: Address?,
        val isCustomer: Boolean = false,
        val isVendor: Boolean = false
): DatabaseEntity(name) {
}