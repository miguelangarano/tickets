<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc601af009dae3f4ec4de3e87d95b9ba2
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc601af009dae3f4ec4de3e87d95b9ba2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc601af009dae3f4ec4de3e87d95b9ba2::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
