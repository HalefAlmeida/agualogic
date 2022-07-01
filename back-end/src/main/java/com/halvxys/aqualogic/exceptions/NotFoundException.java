package com.halvxys.aqualogic.exceptions;

import com.halvxys.aqualogic.utils.MessageUtils;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super(MessageUtils.NO_RECORDS_FOUND);
    }
}
