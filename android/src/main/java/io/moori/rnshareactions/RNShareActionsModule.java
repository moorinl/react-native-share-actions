package io.moori.rnshareactions;

import android.content.Intent;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.Map;

public class RNShareActionsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNShareActionsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNShareActions";
    }

    @ReactMethod
    public void share(ReadableMap options, String title) {
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_SEND);

        if (options.hasKey("url")) {
            intent.putExtra(Intent.EXTRA_TEXT, options.getString("url"));
        }

        if (options.hasKey("subject")) {
            intent.putExtra(Intent.EXTRA_SUBJECT, options.getString("subject"));
        }

        intent.setType("text/plain");

        Intent chooser = Intent.createChooser(intent, title);
        chooser.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        this.reactContext.startActivity(chooser);
    }
}
