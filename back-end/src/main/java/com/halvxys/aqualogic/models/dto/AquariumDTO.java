package com.halvxys.aqualogic.models.dto;

import javax.validation.constraints.NotNull;

public class AquariumDTO {
    private long nr_sequencia;

    @NotNull
    private String nm_aquarium;

    @NotNull
    private Character ie_status;

    public long getNr_sequencia() {
        return nr_sequencia;
    }

    public void setNr_sequencia(long nr_sequencia) {
        this.nr_sequencia = nr_sequencia;
    }

    public String getNm_aquarium() {
        return nm_aquarium;
    }

    public void setNm_aquarium(String nm_aquarium) {
        this.nm_aquarium = nm_aquarium;
    }

    public Character getIe_status() {
        return ie_status;
    }

    public void setIe_status(Character ie_status) {
        this.ie_status = ie_status;
    }
}
